#!/usr/bin/env python3
"""
Parses Belgian news RSS feeds and writes to news/input.txt.
Skips articles without a meaningful summary and ensures 5 valid articles per feed.
"""
import feedparser
from pathlib import Path
import datetime

FEEDS = {
    "Binnenland": "https://www.standaard.be/binnenland/rss/",
    "Buitenland": "https://www.standaard.be/buitenland/rss/"
}

OUTFILE = Path("news/input.txt")

def main():
    now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    out = [f"Nieuwsupdate: {now}", "="*50]

    for topic, url in FEEDS.items():
        out.append(f"\nDe Standaard - {topic} Nieuws:\n" + "="*50)
        feed = feedparser.parse(url)
        if not feed.entries:
            out.append("Geen nieuws gevonden.")
            continue

        valid_count = 0
        index = 0
        while valid_count < 5 and index < len(feed.entries):
            entry = feed.entries[index]
            index += 1
            summary = entry.get('summary', '').replace("\n", " ").strip()

            if not summary or summary.lower() == "geen samenvatting":
                continue

            out.append(f"Titel: {entry.get('title', 'Geen titel')}")
            out.append(f"Link: {entry.get('link', 'Geen link')}")
            out.append(f"Datum: {entry.get('published', 'Geen datum')}")
            out.append(f"Samenvatting: {summary}")
            out.append(f"Auteur: {entry.get('dc_creator', 'Geen auteur')}")
            out.append(f"Categorie: {entry.get('category', 'Geen categorie')}")

            image_url = None
            if 'media_content' in entry and entry.media_content:
                image_url = entry.media_content[0].get('url')
            elif 'enclosures' in entry and entry.enclosures:
                image_url = entry.enclosures[0].get('url')
            if image_url:
                out.append(f"Afbeelding: {image_url}")

            if 'premium' in entry:
                out.append(f"Premium: {entry.premium}")

            out.append("-" * 60)
            valid_count += 1

        if valid_count == 0:
            out.append("Geen artikelen met bruikbare samenvatting gevonden.")

    OUTFILE.parent.mkdir(exist_ok=True)
    OUTFILE.write_text("\n".join(out), encoding="utf-8")
    print("Wrote", OUTFILE)

if __name__ == "__main__":
    main()