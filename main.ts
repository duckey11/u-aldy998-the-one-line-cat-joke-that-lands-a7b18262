import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My cat knocked my glass off the table, watched it shatter, and walked away like a hitman who does it for free.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke);
