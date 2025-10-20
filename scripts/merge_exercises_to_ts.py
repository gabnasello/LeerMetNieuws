import os
import json
import hashlib

# Root directories
INPUT_ROOT = "structured_exercises"
OUTPUT_FILE = "exerciseData.ts"

# ---------- TypeScript header ----------
TS_HEADER = """export interface Exercise {
  id: number;
  section: string;
  level: string;
  title: string;
  topicNumber: number;
  article: {
    title: string;
    summary: string;
  };
  vocabulary: {
    words: { word: string; definition: string }[];
    fillInBlanks: { sentence: string; answer: string }[];
  };
  multipleChoice: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
  trueFalse: {
    statement: string;
    isTrue: boolean;
  }[];
}

export const exercises: Exercise[] = [
"""

# ---------- Helper: Convert JSON → TS literal ----------
def json_to_ts(obj, indent=2):
    """Convert Python dict/list into TypeScript object literal."""
    if isinstance(obj, dict):
        items = []
        for k, v in obj.items():
            items.append(f'{" " * indent}{k}: {json_to_ts(v, indent + 2)}')
        return "{\n" + ",\n".join(items) + f"\n{' ' * (indent - 2)}}}"
    elif isinstance(obj, list):
        if not obj:
            return "[]"
        items = [json_to_ts(v, indent + 2) for v in obj]
        return "[\n" + ",\n".join(f'{" " * indent}{i}' for i in items) + f"\n{' ' * (indent - 2)}]"
    elif isinstance(obj, str):
        return json.dumps(obj, ensure_ascii=False)
    elif isinstance(obj, bool):
        return "true" if obj else "false"
    elif obj is None:
        return "null"
    else:
        return str(obj)

# ---------- Main merging ----------
def main():
    all_exercises = []
    seen_hashes = set()
    current_id = 1

    for root, _, files in os.walk(INPUT_ROOT):
        for file in sorted(files):
            if not file.endswith(".json"):
                continue

            path = os.path.join(root, file)
            with open(path, "r", encoding="utf-8") as f:
                try:
                    data = json.load(f)
                except json.JSONDecodeError:
                    print(f"⚠️ Skipping invalid JSON file: {path}")
                    continue

            # Normalize: each file can contain either an object or an array
            if isinstance(data, dict):
                data = [data]

            for ex in data:
                # Compute a unique hash for the exercise content to detect duplicates
                ex_hash = hashlib.sha256(json.dumps(ex, sort_keys=True).encode()).hexdigest()
                if ex_hash in seen_hashes:
                    continue
                seen_hashes.add(ex_hash)

                # Assign a sequential id
                ex["id"] = current_id
                all_exercises.append(ex)
                current_id += 1

    # Write to TypeScript file
    with open(OUTPUT_FILE, "w", encoding="utf-8") as out:
        out.write(TS_HEADER)
        for i, ex in enumerate(all_exercises):
            comma = "," if i < len(all_exercises) - 1 else ""
            ts_obj = json_to_ts(ex, indent=4)
            out.write(f"{ts_obj}{comma}\n")
        out.write("];\n")

    print(f"✅ Generated {OUTPUT_FILE} with {len(all_exercises)} unique exercises from {len(seen_hashes)} unique hashes.")

# ---------- Run ----------
if __name__ == "__main__":
    main()
