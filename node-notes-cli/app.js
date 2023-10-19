import { readFile, writeFile } from 'node:fs/promises';

let data;
const command = process.argv[2];

const readData = async () => {
  const file = await readFile('data.json', 'utf8');
  data = JSON.parse(file);
};

const saveData = async () => {
  await writeFile('data.json', JSON.stringify(data, null, 2));
};
const readNotes = async () => {
  await readData();
  console.log('Notes:');
  for (const id in data.notes) {
    const note = data.notes[id];
    console.log(`${id}: ${note.content}`);
  }
};

const createNote = async (content) => {
  await readData();
  const newNote = {
    id: data.nextId,
    content,
  };
  data.notes[data.nextId] = newNote;
  data.nextId++;
  await saveData();
  console.log('Note added');
};

const deleteNote = async (id) => {
  await readData();

  if (data.notes[id]) {
    delete data.notes[id];
    for (const noteId in data.notes) {
      if (noteId > id) {
        data.notes[noteId].id = parseInt(noteId) - 1;
      }
    }
    data.nextId = Object.keys(data.notes).length + 1;
    await saveData();
    console.log('Note deleted');
  } else {
    console.log(`Note with id ${id} not found`);
  }
};

const update = async (id, content) => {
  await readData();
  if (data.notes[id]) {
    data.notes[id].content = content;
    await saveData();
    console.log('Note updated');
  } else {
    console.log(`Note with id ${id} not found`);
  }
};

const crud = async () => {
  try {
    if (command === 'read') {
      readNotes();
    } else if (command === 'add') {
      const content = process.argv[3];
      await createNote(content);
    } else if (command === 'delete') {
      const id = parseInt(process.argv[3]);
      await deleteNote(id);
    } else if (command === 'update') {
      const id = parseInt(process.argv[3]);
      const content = process.argv[4];
      await update(id, content);
    } else {
      console.log(
        'Error invalid command, please use [read, add, delete, or update]'
      );
    }
  } catch (error) {
    console.error('Error occured', error);
  }
};
crud();
