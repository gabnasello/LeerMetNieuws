import os
import re
import json
import time
import requests

API_KEY = os.getenv("OPENROUTER_API_KEY")
API_URL = "https://openrouter.ai/api/v1/chat/completions"

LEVELS = ["B1", "A2", "B2", "C1"]

# ---------- API CALL WITH RETRIES ----------
def query_openrouter(messages, max_tokens=1200, retries=5, backoff=2):
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost",
        "X-Title": "Dutch Exercises Generator"
    }
    payload = {
        "model": "deepseek/deepseek-chat-v3.1:free",
        "messages": messages,
        "max_tokens": max_tokens,
        "temperature": 0.4,
    }

    for attempt in range(retries):
        response = requests.post(API_URL, headers=headers, json=payload)
        if response.status_code == 429:
            wait_time = backoff * (2 ** attempt)
            print(f"⚠️ Te veel verzoeken. Wachten {wait_time} seconden...")
            time.sleep(wait_time)
            continue
        response.raise_for_status()
        return response.json()["choices"][0]["message"]["content"]

    raise RuntimeError("❌ Meerdere keren mislukt vanwege snelheidslimiet.")


# ---------- STAP 1: Titel en Samenvatting vereenvoudigen ----------
def generate_simplified_article(level, title, summary):
    messages = [
        {"role": "system", "content": "Je bent een ervaren NT2-docent (Nederlands als tweede taal)."},
        {"role": "user", "content": f"""
Herschrijf de titel en samenvatting in eenvoudig Nederlands op niveau {level}.
Gebruik duidelijke en korte zinnen.
Geef uitsluitend geldige JSON-uitvoer in dit formaat:

{{
  "level": "{level}",
  "simplified_title": "…",
  "simplified_summary": "…"
}}

Titel: {title}
Samenvatting: {summary}
"""}
    ]
    response = query_openrouter(messages)
    try:
        json_match = re.search(r"\{[\s\S]*\}", response)
        if json_match:
            return json.loads(json_match.group(0))
        return {}
    except json.JSONDecodeError:
        print(f"⚠️ Ongeldige JSON voor niveau {level}. Ruwe uitvoer behouden.")
        return {}


# ---------- STAP 2: Oefeningen genereren ----------
def generate_exercises(level, section, topic_number, simplified_data):
    simplified_title = simplified_data.get("simplified_title", "Onbekende titel")
    simplified_summary = simplified_data.get("simplified_summary", "Geen samenvatting beschikbaar.")

    messages = [
        {"role": "system", "content": "Je bent een NT2-docent. Geef uitsluitend geldige JSON-uitvoer."},
        {"role": "user", "content": f"""
Gebruik de onderstaande vereenvoudigde titel en samenvatting om een taalactiviteit te genereren voor niveau {level}.
Zorg dat de woordenlijstwoorden uit de vereenvoudigde tekst komen.

Genereer precies het volgende JSON-formaat:

{{
  "id": 1,
  "section": "{section}",
  "level": "{level}",
  "title": "{simplified_title}",
  "topicNumber": {topic_number},
  "article": {{
    "title": "{simplified_title}",
    "summary": "{simplified_summary}"
  }},
  "vocabulary": {{
    "words": [
      {{"word": "woord1", "definition": "definitie1"}},
      {{"word": "woord2", "definition": "definitie2"}},
      {{"word": "woord3", "definition": "definitie3"}},
      {{"word": "woord4", "definition": "definitie4"}},
      {{"word": "woord5", "definition": "definitie5"}}
    ],
    "fillInBlanks": [
      {{"sentence": "Zin met ___", "answer": "woord"}},
      {{"sentence": "Zin met ___", "answer": "woord"}},
      {{"sentence": "Zin met ___", "answer": "woord"}}
    ]
  }},
  "multipleChoice": [
    {{
      "question": "Vraag 1?",
      "options": ["optie1", "optie2", "optie3", "optie4"],
      "correctAnswer": 1
    }},
    {{
      "question": "Vraag 2?",
      "options": ["optie1", "optie2", "optie3", "optie4"],
      "correctAnswer": 2
    }},
    {{
      "question": "Vraag 3?",
      "options": ["optie1", "optie2", "optie3", "optie4"],
      "correctAnswer": 3
    }}
  ],
  "trueFalse": [
    {{"statement": "Stelling 1", "isTrue": true}},
    {{"statement": "Stelling 2", "isTrue": false}},
    {{"statement": "Stelling 3", "isTrue": true}}
  ]
}}

Titel: {simplified_title}
Samenvatting: {simplified_summary}
"""}
    ]

    response = query_openrouter(messages)
    try:
        json_match = re.search(r"\{[\s\S]*\}", response)
        if json_match:
            return json.loads(json_match.group(0))
        return {}
    except json.JSONDecodeError:
        print(f"⚠️ Ongeldige JSON voor oefeningen ({level}).")
        return {}


# ---------- MAIN ----------
def main():
    news_root = "news"
    output_root = "structured_exercises"
    os.makedirs(output_root, exist_ok=True)

    exercise_id = 1
    topic_number = 1

    for root, dirs, files in os.walk(news_root):
        dirs[:] = [d for d in dirs if not d.startswith(".")]
        section = os.path.basename(root) if root != news_root else "Algemeen"

        for file in files:
            if not file.endswith(".txt"):
                continue

            with open(os.path.join(root, file), "r", encoding="utf-8") as f:
                news_text = f.read().strip()

            title_match = re.search(r"Titel:\s*(.*)", news_text)
            summary_match = re.search(r"Samenvatting:\s*(.*)", news_text)
            title = title_match.group(1) if title_match else "Geen titel"
            summary = summary_match.group(1) if summary_match else ""

            for level in LEVELS:
                print(f"\n🪄 Genereren van vereenvoudigde tekst voor {file} [{level}]...")
                simplified_data = generate_simplified_article(level, title, summary)
                time.sleep(1)

                if not simplified_data:
                    continue

                print(f"✏️ Genereren van oefeningen voor {file} [{level}]...")
                exercise_data = generate_exercises(level, section, topic_number, simplified_data)
                time.sleep(1)

                if exercise_data:
                    exercise_data["id"] = exercise_id
                    exercise_id += 1

                    # Output directory per level
                    level_dir = os.path.join(output_root, level)
                    os.makedirs(level_dir, exist_ok=True)

                    out_file = os.path.join(level_dir, f"{file.replace('.txt', '.json')}")
                    with open(out_file, "w", encoding="utf-8") as f_out:
                        json.dump(exercise_data, f_out, indent=2, ensure_ascii=False)

                    print(f"✅ Opgeslagen: {out_file}")


if __name__ == "__main__":
    main()
