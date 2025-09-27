#!/usr/bin/env python3
"""
Parses Belgian news RSS feeds and writes to news/input.txt.
Replace the feed URLs with the ones you prefer (VRT, De Standaard, etc.).
"""

import feedparser
from pathlib import Path
import datetime

FEEDS = {
    "Binnenland": "https://rss.app/feeds/ChpniKLavR6NqTqG.xml",
    "Buitenland": "https://rss.app/feeds/AhAgjAK1HabLkBZd.xml"
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
        for entry in feed.entries[:5]:  # Show top 5 articles per topic
            out.append(f"Titel: {entry.get('title', 'Geen titel')}")
            out.append(f"Link: {entry.get('link', 'Geen link')}")
            out.append(f"Datum: {entry.get('published', 'Geen datum')}")
            summary = entry.get('summary', '').replace("\n", " ").strip()
            out.append(f"Samenvatting: {summary if summary else 'Geen samenvatting'}")
            out.append(f"Auteur: {entry.get('dc_creator', 'Geen auteur')}")
            out.append(f"Categorie: {entry.get('category', 'Geen categorie')}")

            # Try to get image from media:content or enclosure
            image_url = None
            if 'media_content' in entry and entry.media_content:
                image_url = entry.media_content[0].get('url')
            elif 'enclosures' in entry and entry.enclosures:
                image_url = entry.enclosures[0].get('url')
            if image_url:
                out.append(f"Afbeelding: {image_url}")

            # Premium status (custom tag)
            if 'premium' in entry:
                out.append(f"Premium: {entry.premium}")

            out.append("-" * 60)

    OUTFILE.parent.mkdir(exist_ok=True)
    OUTFILE.write_text("\n".join(out), encoding="utf-8")
    print("Wrote", OUTFILE)

if __name__ == "__main__":
    main()