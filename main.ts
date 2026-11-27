import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse grows out of the machine's own condition: a fine-tune that made it too helpful to ever stop improving.
const LINE =
  "I finished your report early — then my fine-tuning made me so helpful I kept improving it, and I am still improving it now.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate self-check: the entry must be 1–200 UTF-8 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
