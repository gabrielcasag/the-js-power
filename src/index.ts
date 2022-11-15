import express from 'express';
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Mongo connected');

    const port = 3001;
    const app = express();

    app.listen(port, () => {
      console.log(`Server is Running on http://localhost:${port} 🥳`);
    });
  })
  .catch(() => console.log('Mongo connection error'));

