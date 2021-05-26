'use strict';

import express, { Request, Response, Application } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import population from './router/populace-router';
import countries from './router/countries-router';

dotenv.config({ path: '.env' });

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use('/api', population);
app.use('/api', countries);
app.use('*', (req: Request, res: Response) => {
  res.status(404).send('Resource not found - 404');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
