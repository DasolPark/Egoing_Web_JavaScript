const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 4545;

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/main', (req, res) => {
  res.sendFile(__dirname + '/tableAndList.html');
});

app.listen(PORT, () => {
  console.log(`Port ${PORT}!`);
});
