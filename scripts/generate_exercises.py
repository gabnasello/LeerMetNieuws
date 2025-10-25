import os
import re
import json
import time
import random
import requests

# ---------- CONFIGURATION ----------
API_KEY = os.getenv("OPENROUTER_API_KEY")
API_URL = "https://openrouter.ai/api/v1/chat/completions"

LEVELS = ["A1", "A2", "B1", "B2", "C1"]
# LEVELS = ["B1"]


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


# ---------- MAIN GENERATOR FUNCTION ----------
def generate_simplified_and_exercises(level, section, topic_number, title, summary):
    # Level-specific rewriting guidelines
    level_guidelines = {
        "A1": (
            "- Gebruik zeer eenvoudige zinnen (max. 8-10 woorden).\n"
            "- Gebruik alleen basiswoordenschat (bijv. eten, wonen, familie, werk, school).\n"
            "- Vermijd samengestelde zinnen, bijvoeglijke naamwoorden en moeilijke woorden.\n"
            "- Schrijf in de tegenwoordige tijd.\n"
            "- Gebruik korte en directe formuleringen, alsof je met een beginner praat."
        ),
        "A2": (
            "- Gebruik eenvoudige zinnen met soms een voegwoord (zoals 'en', 'maar', 'omdat').\n"
            "- Gebruik frequente woorden over dagelijks leven.\n"
            "- Vermijd passieve vormen en idiomatische uitdrukkingen.\n"
            "- Houd zinnen kort en concreet."
        ),
        "B1": (
            "- Gebruik gewone spreektaal met af en toe een samengestelde zin.\n"
            "- Gebruik een neutrale, informatieve toon.\n"
            "- Beperk abstracte of formele woorden.\n"
            "- Schrijf alsof de lezer een krantenartikel op eenvoudig niveau begrijpt."
        ),
        "B2": (
            "- Gebruik natuurlijk Nederlands met een mix van korte en langere zinnen.\n"
            "- Mag matig abstracte of beschouwende taal bevatten.\n"
            "- Gebruik correcte grammatica, inclusief bijzinnen.\n"
            "- Houd het toegankelijk, maar niet kinderlijk."
        ),
        "C1": (
            "- Gebruik vloeiend en natuurlijk Nederlands zoals in kwaliteitsmedia.\n"
            "- Je mag nuances, synoniemen en complexere structuren gebruiken.\n"
            "- Gebruik correcte formele grammatica en precieze woordkeuze.\n"
            "- Houd de toon academisch maar begrijpelijk."
        ),
    }

    messages = [
        {
            "role": "system",
            "content": (
                "Je bent een ervaren NT2-docent (Nederlands als tweede taal) die oefenmateriaal maakt "
                "voor anderstaligen op verschillende ERK-niveaus (CEFR). "
                "Gebruik correcte spelling en grammatica, en geef uitsluitend geldige JSON-uitvoer."
            )
        },
        {
            "role": "user",
            "content": f"""
Herschrijf de titel en samenvatting in natuurlijk en begrijpelijk Nederlands op niveau {level}.
Volg de onderstaande richtlijnen voor dit niveau:

{level_guidelines[level]}

Maak vervolgens taalactiviteiten op basis van de vereenvoudigde tekst:

1. Kies **8 woorden** die letterlijk voorkomen in de vereenvoudigde titel of samenvatting.
   - Gebruik de woorden exact zoals ze in de tekst staan (niet verbogen of afgeleid).
   - Geen enkel woord mag afkomstig zijn van buiten de vereenvoudigde titel of samenvatting.
   - Voor elk woord:
       - Geef een korte definitie in eenvoudig Nederlands op niveau {level}.
       - Maak één zin met een invul-leegte (___) waarin dat woord ontbreekt.
       - Voeg een veld "answer" toe met het juiste woord.

2. Maak **precies 3 meerkeuzevragen** over de betekenis van de vereenvoudigde tekst.
   - Elke vraag moet 4 antwoordopties hebben.
   - Voeg het juiste antwoord toe als numerieke index (1 t/m 4).

3. Maak **precies 3 waar/niet waar-stellingen** over de inhoud van de tekst.
   - Elke stelling moet realistisch klinken.
   - Gebruik de sleutel "isTrue": true of false.

Geef de uitvoer als **één geldig JSON-object** met exact deze structuur (zonder uitleg erbuiten):

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
      {{
        "word": "woord1",
        "definition": "definitie1",
        "sentence": "Zin met ___",
        "answer": "woord1"
      }},
      ...
      {{
        "word": "woord8",
        "definition": "definitie8",
        "sentence": "Zin met ___",
        "answer": "woord8"
      }}
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
        if not json_match:
            print("⚠️ Geen JSON gevonden in de uitvoer.")
            return {}

        data = json.loads(json_match.group(0))
        data["section"] = section
        data["topic"] = section

        # ---------- FILTER & SELECT WORDS ----------
        words = data.get("vocabulary", {}).get("words", [])
        simplified_text = (
            f"{data.get('article', {}).get('title', '')} "
            f"{data.get('article', {}).get('summary', '')}"
        ).lower()

        filtered_words = [
            w for w in words if w["word"].lower() in simplified_text
        ]

        # Keep at most 5 words (random if more)
        if len(filtered_words) > 5:
            filtered_words = random.sample(filtered_words, 5)

        data["vocabulary"]["words"] = filtered_words

        # ---------- ADD FILL-IN-BLANKS ----------
        if len(filtered_words) >= 3:
            sampled = random.sample(filtered_words, 3)
            data["vocabulary"]["fillInBlanks"] = [
                {"sentence": w["sentence"], "answer": w["answer"]} for w in sampled
            ]
        else:
            data["vocabulary"]["fillInBlanks"] = []

        return data

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
