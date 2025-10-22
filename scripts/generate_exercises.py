import os
import re
import json
import time
import requests

# ---------- CONFIGURATION ----------
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


# ---------- COMBINED FUNCTION ----------
def generate_simplified_and_exercises(level, section, topic_number, title, summary):
    messages = [
        {
            "role": "system",
            "content": (
                "Je bent een ervaren NT2-docent (Nederlands als tweede taal) die oefenmateriaal maakt "
                "voor anderstaligen op verschillende ERK-niveaus (CEFR). "
                "Je begrijpt goed welke grammatica, woordenschat en zinslengte bij elk niveau hoort. "
                "Gebruik correcte spelling en grammatica, en geef uitsluitend geldige JSON-uitvoer."
            )
        },
        {
            "role": "user",
            "content": f"""
Herschrijf de titel en samenvatting in natuurlijk en begrijpelijk Nederlands op niveau {level}.
De zinnen hoeven niet kort te zijn, maar moeten qua woordenschat, grammatica en structuur passen bij niveau {level}.
Beperk je niet tot extreem simpele taal; gebruik wat natuurlijk klinkt op dat niveau.

Maak vervolgens taalactiviteiten op basis van de vereenvoudigde tekst:

1. Kies **exact 5 woorden** die letterlijk voorkomen in de vereenvoudigde titel of samenvatting.
   - Geen enkel woord mag afkomstig zijn van buiten de vereenvoudigde titel of samenvatting.
   - Gebruik de woorden zoals ze in de tekst voorkomen (niet verbogen of afgeleid).
   - Voeg per woord een korte, eenvoudige definitie toe (in eenvoudig Nederlands).

2. Maak **3 fill-in-the-blank-zinnen** met uitsluitend deze 5 woorden.
   - De oplossing van elke zin moet een woord zijn uit de gekozen 5 woorden.

3. Maak **3 meerkeuzevragen** over de betekenis van de vereenvoudigde tekst.

4. Maak **3 waar/niet waar-stellingen** over de inhoud van de tekst.

Geef de uitvoer als **één geldig JSON-object** met exact deze structuur:

{{
  "id": 1,
  "section": "{section}",
  "topic": "{section}",
  "level": "{level}",
  "title": "vereenvoudigde titel",
  "topicNumber": {topic_number},
  "article": {{
    "title": "vereenvoudigde titel",
    "summary": "vereenvoudigde samenvatting"
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

Titel: {title}
Samenvatting: {summary}
"""
        }
    ]

    response = query_openrouter(messages)
    try:
        json_match = re.search(r"\{[\s\S]*\}", response)
        if json_match:
            data = json.loads(json_match.group(0))

            # Optional validation (you can uncomment if you want strict checking)
            # simplified_text = (data.get("article", {}).get("title", "") + " " +
            #                    data.get("article", {}).get("summary", "")).lower()
            # invalid_words = [
            #     w["word"] for w in data.get("vocabulary", {}).get("words", [])
            #     if w["word"].lower() not in simplified_text
            # ]
            # if invalid_words:
            #     print(f"⚠️ Woorden niet gevonden in vereenvoudigde tekst: {invalid_words}")

            return data
        print("⚠️ Geen JSON gevonden in de uitvoer.")
        return {}
    except json.JSONDecodeError:
        print(f"⚠️ Ongeldige JSON voor niveau {level}.")
        return {}


# ---------- MAIN SCRIPT ----------
def main():
    news_root = "news"
    output_root = "structured_exercises"
    os.makedirs(output_root, exist_ok=True)

    exercise_id = 1
    topic_number = 1

    for root, dirs, files in os.walk(news_root):
        dirs[:] = [d for d in dirs if not d.startswith(".")]
        if root == news_root:
            continue

        section = os.path.basename(root)

        for file in files:
            if not file.endswith(".txt"):
                continue

            file_path = os.path.join(root, file)
            with open(file_path, "r", encoding="utf-8") as f:
                news_text = f.read().strip()

            title_match = re.search(r"Titel:\s*(.*)", news_text)
            summary_match = re.search(r"Samenvatting:\s*(.*)", news_text)
            title = title_match.group(1) if title_match else "Geen titel"
            summary = summary_match.group(1) if summary_match else ""

            for level in LEVELS:
                print(f"\n🪄 Genereren van vereenvoudigde tekst en oefeningen voor {file} [{level}] ({section})...")
                exercise_data = generate_simplified_and_exercises(level, section, topic_number, title, summary)
                time.sleep(1)

                if exercise_data:
                    exercise_data["id"] = exercise_id
                    exercise_id += 1

                    level_dir = os.path.join(output_root, level, section)
                    os.makedirs(level_dir, exist_ok=True)

                    out_file = os.path.join(level_dir, f"{file.replace('.txt', '.json')}")
                    with open(out_file, "w", encoding="utf-8") as f_out:
                        json.dump(exercise_data, f_out, indent=2, ensure_ascii=False)

                    print(f"✅ Opgeslagen: {out_file}")
                else:
                    print(f"⚠️ Geen geldige uitvoer ontvangen voor {file} [{level}] in {section}.")

    print("\n🎉 Alles klaar!")


# ---------- ENTRY POINT ----------
if __name__ == "__main__":
    main()
