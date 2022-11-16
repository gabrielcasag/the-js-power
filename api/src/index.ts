import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Mongo connected');

    const port = 3001;
    const app = express();

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`Server is Running on http://localhost:${port} 🥳`);
    });
  })
  .catch(() => console.log('Mongo connection error'));

