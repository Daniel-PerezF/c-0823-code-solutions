import { readFile } from 'node:fs/promises';

try {
  const p = await readFile('dijkstra.txt', 'utf8');
  console.log(p);
} catch (err) {
  console.log(err);
}
