const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/connectDB');

const app = express();
dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = 8000;

const start = async () => {
  try {
    await connectDB();
    await app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
