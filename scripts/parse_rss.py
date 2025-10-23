#!/usr/bin/env python3
"""
Parses Belgian news RSS feeds and stores each article in fixed filenames
(article_1.txt to article_5.txt) inside the respective feed directory.
Each file is overwritten on each run and includes article number and timestamp.
"""
import feedparser
from pathlib import Path
import datetime

FEEDS = {
    "Binnenland": "https://www.standaard.be/binnenland/rss/",
    "Buitenland": "https://www.standaard.be/buitenland/rss/"
}

def main():
    now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")

    for topic, url in FEEDS.items():
        topic_dir = Path("news") / topic
        topic_dir.mkdir(parents=True, exist_ok=True)

        feed = feedparser.parse(url)
        if not feed.entries:
            continue

        valid_count = 0
        index = 0
        while valid_count < 3 and index < len(feed.entries):
            entry = feed.entries[index]
            index += 1
            summary = entry.get('summary', '').replace("\n", " ").strip()

            if not summary or summary.lower() == "geen samenvatting":
                continue

            article = [
                f"Artikel {valid_count + 1}",
                f"Nieuwsupdate: {now} UCT",
                "=" * 50,
                f"\nDe Standaard - {topic} Nieuws:",
                "=" * 50,
                f"Titel: {entry.get('title', 'Geen titel')}",
                f"Link: {entry.get('link', 'Geen link')}",
                f"Datum: {entry.get('published', 'Geen datum')}",
                f"Samenvatting: {summary}",
                f"Auteur: {entry.get('dc_creator', 'Geen auteur')}",
                f"Categorie: {entry.get('category', 'Geen categorie')}"
            ]

            image_url = None
            if 'media_content' in entry and entry.media_content:
                image_url = entry.media_content[0].get('url')
            elif 'enclosures' in entry and entry.enclosures:
                image_url = entry.enclosures[0].get('url')
            if image_url:
                article.append(f"Afbeelding: {image_url}")

            if 'premium' in entry:
                article.append(f"Premium: {entry.premium}")

            article.append("-" * 60)

            filename = topic_dir / f"article_{valid_count + 1}.txt"
            filename.write_text("\n".join(article), encoding="utf-8")

            valid_count += 1

    print("Nieuwsartikelen zijn opgeslagen in vaste bestanden per feed.")

if __name__ == "__main__":
    main()
