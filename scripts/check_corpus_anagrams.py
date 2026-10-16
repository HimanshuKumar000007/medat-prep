import os
import re
import json
from collections import Counter

def get_multiset(word):
    return tuple(sorted(Counter(word.upper()).items()))

target_words = [
    "KLINIK",
    "MAGNET",
    "PRISMA",
    "VAKUUM",
    "ALKOHOL",
    "DIALYSE",
    "KOLLAGEN",
    "EMULSION",
    "NEKROSE",
    "SYNDROM",
    "LIGAMENT",
    "VAKZINE",
    "BIOETHIK",
    "HYPOTHESE",
    "AUTONOMIE",
]

target_multisets = {w: get_multiset(w) for w in target_words}
multiset_to_targets = {}
for w, ms in target_multisets.items():
    multiset_to_targets.setdefault(ms, []).append(w)

corpus_words = set()

# Scan src directory
src_dir = r"src\data"
for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.endswith((".json", ".ts")):
            filepath = os.path.join(root, f)
            try:
                with open(filepath, "r", encoding="utf-8", errors="ignore") as fp:
                    content = fp.read()
                    words = re.findall(r"\b[A-Za-zÄÖÜäöüß]{5,15}\b", content)
                    for word in words:
                        # Clean word
                        cleaned = word.upper().replace("Ä", "AE").replace("Ö", "OE").replace("Ü", "UE").replace("ß", "SS")
                        if cleaned.isalpha() and len(cleaned) in [6, 7, 8, 9, 10]:
                            corpus_words.add(cleaned)
            except Exception as e:
                pass

print(f"Extracted {len(corpus_words)} unique candidate words from project corpus.")

# Check for anagrams in the corpus
found_matches = {}
for word in corpus_words:
    ms = get_multiset(word)
    if ms in multiset_to_targets:
        targets = multiset_to_targets[ms]
        for t in targets:
            found_matches.setdefault(t, set()).add(word)

for t in target_words:
    matches = found_matches.get(t, {t})
    print(f"Target: {t} -> Corpus matches: {matches}")
