const fs = require('fs');
const express = require('express');

const app = express();
const port = 1245;
const databaseName = process.argv[2];

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }
      let response = 'This is the list of our students\n';
      const study = {};
      let tempData = data.split('\n');
      tempData = tempData.slice(1);
      tempData = tempData.filter((arr) => arr.length > 1);

      response += `Number of students: ${tempData.length}\n`;
      for (let i = 0; i < tempData.length; i += 1) {
        const row = tempData[i];
        const column = row.split(',');
        if (!study[column[3]]) {
          study[column[3]] = [column[0]];
        } else {
          study[column[3]].push(column[0]);
        }
      }
      for (const course in study) {
        if (course) {
          response += `Number of students in ${course}: ${study[course].length}. List: ${study[course].join(', ')}\n`;
        }
      }
      return resolve(response.slice(0, -1));
    });
  });
}

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(databaseName)
    .then((result) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(result);
    }).catch(() => {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.write('This is the list of our students\n');
      res.end('Cannot load the database');
    });
});

app.listen(port, () => {
  console.log(`Listening port on ${port}`);
});

module.exports = app;
