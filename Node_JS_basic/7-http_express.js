const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let responseText = 'This is the list of our students\n';

  countStudents(process.argv[2])
    .then((data) => {
      responseText += data;
      res.send(responseText);
    })
    .catch(() => {
      responseText += 'Cannot load the database';
      res.status(500).send(responseText);
    });
});

app.listen(1245);

module.exports = app;
