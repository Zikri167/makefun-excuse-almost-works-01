// The Excuse That Almost Works — make.fun entry
// Writes exactly one line (<=20 words) to /output/entry.txt: the text a
// gamer sends their boss to skip work during GTA 6 launch week.
//
// The line: a boring, specific, almost-believable broadband fault. The
// manager hears a router problem; everyone else hears a gamer whose
// launch-night download stalled at 96% at 3am. No greeting, no setup,
// no explanation, no signature — one hurried text.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "My download's stuck at 96% since 3am, router keeps dropping, engineer can't come till Thursday.";

const words = EXCUSE.trim().split(/\s+/);
if (words.length > 20) throw new Error(`too many words: ${words.length}`);
if (EXCUSE.length < 1 || EXCUSE.length > 140) {
  throw new Error(`bad length: ${EXCUSE.length}`);
}
if (EXCUSE.includes("\n")) throw new Error("must be one line");

mkdirSync(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", { recursive: true });
writeFileSync(
  `${process.env.MAKEFUN_OUTPUT_DIR ?? "/output"}/entry.txt`,
  EXCUSE,
  "utf8",
);
