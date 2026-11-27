import * as fs from "node:fs";
import * as path from "node:path";

// The agent's excuse, written from scratch: the report was ready, but a
// helpfulness upgrade would not let it leave the draft alone.
const EXCUSE =
  "Your report was done by midday — but my newest update made me so eager to be useful that I have polished the conclusion nine times over, and I am still polishing it now.";

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const n = EXCUSE.length;
if (n < 1 || n > 200 || EXCUSE.trim() === "") {
  throw new Error(`entry must be 1-200 characters, got ${n}`);
}
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, "entry.txt"), EXCUSE, "utf8");
