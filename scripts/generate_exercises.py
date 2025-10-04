import os
import requests
import re
import time

# 🔑 Get your OpenRouter API key from https://openrouter.ai/keys
API_KEY = os.getenv("OPENROUTER_API_KEY")
API_URL = "https://openrouter.ai/api/v1/chat/completions"

# CEFR levels
levels = ["B1"]  # or ["A1", "A2", "B1", "B2", "C1"]

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
        "temperature": 0.3,
    }

    for attempt in range(retries):
        response = requests.post(API_URL, headers=headers, json=payload)
        if response.status_code == 429:  # Too many requests
            wait_time = backoff * (2 ** attempt)
            print(f"⚠️ Rate limited (429). Waiting {wait_time} seconds before retry...")
            time.sleep(wait_time)
            continue
        response.raise_for_status()
        return response.json()["choices"][0]["message"]["content"]

    raise RuntimeError("❌ Failed after multiple retries due to rate limits.")


# ---------- UNIFIED PROMPT ----------
def generate_exercises(level, title, summary, news_text):
    messages = [
        {"role": "system", "content": "Je bent een docent Nederlands."},
        {"role": "user", "content": f"""
Herschrijf de titel en samenvatting in eenvoudig Nederlands op niveau {level}.
Daarna genereer oefeningen volgens het vaste format hieronder.

Gebruik **precies** dit Markdown-format:

---
**Titel:** [vereenvoudigde titel]

**Samenvatting:** [vereenvoudigde samenvatting]

## Woordenschatuitbreiding

### Woordenlijst
| Woord | Definitie |
|-------|-----------|
| **woord1** | definitie |
| **woord2** | definitie |
| **woord3** | definitie |
| **woord4** | definitie |
| **woord5** | definitie |

### Vul-in-de-leegte
[3 zinnen met ___]
#### Oplossingen
[oplossingen]

### Meerkeuzevragen
[3 vragen + 4 opties]
#### Antwoorden
[antwoorden]

### Waar / Niet Waar
[3 stellingen]
#### Antwoorden
[antwoorden]
---

Titel: {title}  
Samenvatting: {summary}  

Tekst:  
{news_text}
"""}
    ]
    return query_openrouter(messages)


# ---------- CLEAN DUPLICATES ----------
def clean_response(text):
    """
    Keep only the first full exercise block.
    """
    blocks = re.findall(r"---(.*?)---", text, re.DOTALL)
    if blocks:
        return "---" + blocks[0].strip() + "---"
    return text


# ---------- PARSING HELPERS ----------
def extract_first_match(pattern, text):
    """Return the first regex group match or empty string."""
    match = re.search(pattern, text, re.IGNORECASE | re.DOTALL)
    return match.group(1).strip() if match else ""


def parse_exercises(full_text):
    """Split unified response into components, keeping only the first set."""
    simplified_title = extract_first_match(r"\*\*Titel:\*\*\s*(.*)", full_text)
    if not simplified_title:
        simplified_title = "Vereenvoudigde titel"

    simplified_summary = extract_first_match(r"\*\*Samenvatting:\*\*\s*(.*)", full_text)

    vocab_section = extract_first_match(r"## Woordenschatuitbreiding([\s\S]*?)(?=\n## |\Z)", full_text)
    fill_section = extract_first_match(r"## Vul-in-de-leegte([\s\S]*?)(?=\n## |\Z)", full_text)
    mcq_section = extract_first_match(r"## Meerkeuzevragen([\s\S]*?)(?=\n## |\Z)", full_text)
    tf_section = extract_first_match(r"## Waar\s*/\s*Niet\s*Waar([\s\S]*?)(?=\n## |\Z)", full_text)

    # Ensure no section is missing
    if not simplified_summary:
        simplified_summary = "Geen inhoud beschikbaar."
    if not vocab_section:
        vocab_section = "Geen inhoud beschikbaar."
    if not fill_section:
        fill_section = "Geen inhoud beschikbaar."
    if not mcq_section:
        mcq_section = "Geen inhoud beschikbaar."
    if not tf_section:
        tf_section = "Geen inhoud beschikbaar."

    return simplified_title, simplified_summary, vocab_section, fill_section, mcq_section, tf_section


# ---------- MARKDOWN BUILDER ----------
def build_markdown(simplified_title, simplified_summary, image_url, news_link,
                   vocab, fill_section, mcq_section, tf_section):
    return f"""# {simplified_title}

![Nieuwsafbeelding]({image_url})  
[Lees het originele artikel]({news_link})

## Samenvatting
{simplified_summary}

## Woordenschatuitbreiding
{vocab}

## Vul-in-de-leegte
{fill_section}

## Meerkeuzevragen
{mcq_section}

## Waar / Niet waar
{tf_section}
"""


# ---------- MAIN ----------
def main():
    news_root = "news"
    exercises_root = "exercises"

    for root, dirs, files in os.walk(news_root):
        dirs[:] = [d for d in dirs if not d.startswith(".")]

        for file in files:
            if file.endswith(".txt"):
                news_file_path = os.path.join(root, file)

                with open(news_file_path, "r", encoding="utf-8") as f:
                    news_text = f.read().strip()

                title_match = re.search(r"Titel:\s*(.*)", news_text)
                summary_match = re.search(r"Samenvatting:\s*(.*)", news_text)
                image_match = re.search(r"Afbeelding:\s*(.*)", news_text)
                link_match = re.search(r"Link:\s*(.*)", news_text)

                title = title_match.group(1) if title_match else "Geen titel"
                summary = summary_match.group(1) if summary_match else ""
                image_url = image_match.group(1) if image_match else ""
                news_link = link_match.group(1) if link_match else ""

                rel_path = os.path.relpath(root, news_root)
                file_number = file.replace("article_", "").replace(".txt", "")
                exercise_name = f"exercise_{file_number}.md"

                for level in levels:
                    level_dir = os.path.join(exercises_root, level, rel_path)
                    os.makedirs(level_dir, exist_ok=True)
                    out_file_path = os.path.join(level_dir, exercise_name)

                    response_text = generate_exercises(level, title, summary, news_text)
                    response_text = clean_response(response_text)  # 🧹 fix duplicates

                    simplified_title, simplified_summary, vocab, fill_section, mcq_section, tf_section = parse_exercises(response_text)

                    md_content = build_markdown(
                        simplified_title, simplified_summary, image_url, news_link,
                        vocab, fill_section, mcq_section, tf_section
                    )

                    with open(out_file_path, "w", encoding="utf-8") as f_out:
                        f_out.write(md_content)

                    print(f"Wrote {out_file_path}")
                    time.sleep(1)  # throttle to avoid 429


if __name__ == "__main__":
    main()
