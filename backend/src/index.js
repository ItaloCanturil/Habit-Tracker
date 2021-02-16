const express = require('express');
const routes = require('./routes');
// import dotenv from 'dotenv';

const app = express();
const port = 3000;

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log('Success!!');
});
