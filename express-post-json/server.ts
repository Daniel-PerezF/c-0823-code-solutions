// import { error } from 'console';
import express from 'express';
const app = express();

let nextId: number = 1;

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Håkon Wium Lie',
    course: 'CSS',
    score: 92,
  },
};

app.get('/api/grades', (req, res) => {
  const gradesArray: any = [];
  for (const keys in grades) {
    gradesArray.push(grades[keys]);
  }
  res.json(gradesArray);
});

app.delete('/api/grades/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (!Number.isInteger(id)) {
    res.status(400).json({ error: `${id} is not an integer` });
    return;
  }
  if (!(id in grades)) {
    res.status(404).json({ error: `${id} not found` });
    return;
  }

  if (grades[id]) {
    delete grades[id];
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const { name, course, score } = req.body;
  if (!name || !course || !score === undefined) {
    res.status(400).json('Invalid request');
    return;
  }
  const grade = req.body;
  grade.id = nextId;
  grades[nextId++] = grade;
  res.status(201).json(grades);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
