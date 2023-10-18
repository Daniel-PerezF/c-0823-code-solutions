import { readFile } from 'node:fs/promises';

const fileName = process.argv[2];
try {
  const p = await readFile(fileName, 'utf8');
  console.log(p);
} catch (err) {
  console.log(err);
}
