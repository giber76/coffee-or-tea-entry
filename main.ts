import { mkdirSync, writeFileSync } from "node:fs";

// One Letter: Coffee or Tea — the entry is exactly one letter.
// "A" stands for coffee. Against the judge's brief, coffee wins
// the comparison on the criteria in their stated order:
//   - Vivid first: coffee is the fuller, more alive answer — dark,
//     bitter, steaming, the jolt that starts the morning. Tea is
//     calm and gentle; it reads thinner beside it.
//   - Funnier second: coffee carries the wit — the "don't talk to
//     me before coffee" stance, the dependency joke everybody
//     recognises at once.
//   - Truer third: coffee is the honest default. For most people
//     the morning drink, the one they actually reach for, is coffee.
// A single letter, nothing else: no word, no explanation, no
// punctuation. That is the whole entry.
const LETTER = "A";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LETTER, "utf8");
