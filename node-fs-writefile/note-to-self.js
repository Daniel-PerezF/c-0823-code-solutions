import { writeFile } from 'node:fs/promises';
// import { Buffer } from 'node:buffer';

const data = process.argv[2] + '\n';
async function random() {
  try {
    await writeFile('note.txt', data);
    console.log('File written successfully!');
  } catch (error) {
    console.error(error);
  }
}
random();
