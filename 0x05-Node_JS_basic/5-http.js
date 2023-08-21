const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
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

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
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
  }
});

app.listen(port, hostname, () => {
  console.log(`app running at http://${hostname}:${port}/`);
});

module.exports = app;
