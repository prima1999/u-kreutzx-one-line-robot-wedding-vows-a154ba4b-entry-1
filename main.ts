import { mkdirSync, writeFileSync } from "node:fs";

// A single line of robot wedding vows: a promise, machine-specific,
// with the joke landing in the last few words. At most 160 characters.
const MAX_CHARS = 160;
const VOW =
  "I promise to love you through every firmware update, every drained battery, and every unexpected reboot — till a factory reset do us part.";

const VOW_LENGTH = [...VOW].length;
if (VOW_LENGTH < 1 || VOW_LENGTH > MAX_CHARS) {
  throw new Error("Vow must be 1 to 160 characters.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${VOW}\n`, "utf8");
