import { writeFile } from 'node:fs/promises';
// import { Buffer } from 'node:buffer';

const data = Math.random();
const dataStr = data.toString() + '\n';
async function random() {
  try {
    await writeFile('random.txt', dataStr);
    console.log('File written successfully!');
  } catch (error) {
    console.error(error);
  }
}
random();
