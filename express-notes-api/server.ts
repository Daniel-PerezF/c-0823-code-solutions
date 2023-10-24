import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';
const app = express();
app.use(express.json());

type Note = {
  id: number;
  content: string;
};
type Data = {
  nextId: number;
  notes: Record<number, Note>;
};

let data: Data;
const saveData = async (data: any) => {
  await writeFile('data.json', JSON.stringify(data, null, 2));
};

const readData = async () => {
  const file = await readFile('data.json', 'utf8');
  data = JSON.parse(file);
  return data;
};

app.get('/api/notes', async (req, res) => {
  try {
    const data = await readData();
    res.status(200).json(data);
  } catch (err) {
    console.error(500);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const idNum = Number(id);
    if (isNaN(idNum) || !Number.isInteger(idNum)) {
      res.status(400).json({ error: `${id} is not a valid integer` });
      return;
    }

    const data = await readData();
    if (!(id in data.notes)) {
      res.status(400).json({ error: `Note with id: ${id} not found.` });
      return;
    }
    res.status(200).json(data.notes[idNum]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

const createNote = async (content: string) => {
  const data = await readData();
  const newNote: Note = {
    id: data.nextId,
    content,
  };
  data.notes[data.nextId] = newNote;
  data.nextId++;
  await saveData(data);
  console.log('Note added');
};

app.post('/api/notes', async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      res.status(400).json({ error: 'Content field is required' });
      return;
    }
    await createNote(content);
    res.status(200).json(content);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

const deleteNote = async (id: number) => {
  data = await readData();
  if (data.notes[id]) {
    delete data.notes[id];
    await saveData(data);
  }
};

app.delete('/api/notes/:id', (req, res) => {
  try {
    const { id } = req.params;
    const idNum = Number(id);
    deleteNote(idNum);
    res.sendStatus(200);
  } catch (err) {
    console.error(500);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

const update = async (id: number, content: string) => {
  data = await readData();
  if (data.notes[id]) {
    data.notes[id].content = content;
    await saveData(data);
    console.log('Note updated');
  }
};

app.put('/api/notes/:id', (req, res) => {
  try {
    const { id } = req.params;
    const idNum = Number(id);
    const { content } = req.body;
    if (Number.isNaN(id) || !Number.isInteger(id) || idNum < 1) {
      res.status(400).json({ error: 'Id must be a positive integer' });
      return;
    }
    if (content === undefined) {
      res.status(400).json({ error: 'content is a required field' });
      return;
    }
    if (data.notes[idNum] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    update(idNum, content);
    res.sendStatus(204);
  } catch (err) {
    console.error(500);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
