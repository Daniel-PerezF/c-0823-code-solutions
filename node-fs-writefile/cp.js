import { writeFile, readFile } from 'node:fs/promises';

const [, , source, dest] = process.argv;
const sourceContents = await readFile(source);
await writeFile(dest, sourceContents);
