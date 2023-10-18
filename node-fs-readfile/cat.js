import { readFile } from 'node:fs/promises';

const fileNames = process.argv.slice(2);
try {
  const ps = fileNames.map(
    async (fileName) => await readFile(fileName, 'utf8')
  );
  const contents = await Promise.all(ps);

  // const p = await readFile(fileNames, 'utf8');
  console.log(contents.join('\n'));
} catch (err) {
  console.log(err);
}
