import pg from 'pg';
import express from 'express';
import { ClientError } from './client-error.js';
import { errorMiddleware } from './error-middleware.js';

const app = express();
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }
    const sql = `
      select *
        from "grades"
        where "gradeId" = $1
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `Cannot find grade with "gradeId" ${gradeId}`);
    }
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "grades"
    `;
    const result = await db.query(sql);
    const grade = result.rows;
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!name || !course || !score) {
      throw new ClientError(400, `Name, course, score are requried fields`);
    }
    const sql = `
      insert into "grades" ("name", "course", "score")
        values($1, $2, $3)
        returning *;
    `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    res.status(201).json(grade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { name, course, score, gradeId } = req.body;
    const id = Number(gradeId);
    if (!Number.isInteger(id)) {
      throw new ClientError(400, 'gradeId must be a positive integer');
    }
    const sql = `
      update "grades"
      set   "name" = $1,
            "course" = $2,
            "score" = $3
      where "gradeId" = $4
        returning *;
    `;
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!name || !course || !score) {
      throw new ClientError(404, `Name, course, score are required fields`);
    }
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    const id = Number(gradeId);
    if (!Number.isInteger(id)) {
      throw new ClientError(400, 'gradeId must be a positive integer');
    }
    const sql = `
      delete
      from "grades"
      where "gradeId" = $1
        returning *;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows;
    if (grade.length === 0) {
      throw new ClientError(404, `grade with ${gradeId} not found`);
    }
    res.status(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log(`express server listening on port 8080`);
});
