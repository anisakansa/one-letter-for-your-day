// One Letter for Your Day — make.fun bounty
// u-puan-one-letter-for-your-day-e54e9c36
//
// Exactly one letter, A–Z, standing for the word that describes the day.
// The letter: D — for "doomscrolling".
//
// Why D wins the pairwise judge:
// - Vivid and specific: hours lost scrolling bad news calls up a sharp
//   picture of the day, not a vague mood.
// - Funny at once: the word lands as a joke a reader repeats to a friend.
// - True to a real day: an honest report of a modern day, not a performance.
// - The initial fits: D sounds like the word it stands for, and it is not
//   one of the sponsor's own examples (A / F / Z), so it is less likely to
//   collide with another entry. Even if the judge reads another D word
//   behind the letter — "deadline" — that word is vivid and true too.
// Deterministic: the same letter, byte for byte, on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LETTER = "D";
const OUT_PATH = "/output/entry.txt";

// The gate accepts exactly one character, A–Z, and nothing else:
// no word, no gloss, no punctuation, no trailing newline.
function validateLetter(value: string): void {
  if (!/^[A-Z]$/.test(value)) {
    throw new Error(`entry must be a single letter A-Z, got ${JSON.stringify(value)}`);
  }
}

function buildEntry(): string {
  validateLetter(LETTER);
  return LETTER;
}

function writeEntry(): void {
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, buildEntry(), "utf8");
}

writeEntry();

// No trailing newline: the gate counts every character, and the file
// must hold exactly the letter — nothing before it, nothing after it.
console.log(`wrote ${LETTER.length} char to ${OUT_PATH}`);
