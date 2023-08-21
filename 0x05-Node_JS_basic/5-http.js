const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;
databaseName = process.argv[2]

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    fs.readFile(databaseName, 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      }
      let response = 'This is the list of our students';
      const study = {};
      let tempData = data.split('\n');
      tempData = tempData.slice(1);
      tempData = tempData.filter((arr) => arr.length > 1);

      response += (`Number of students: ${tempData.length}\n`);
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
          response += (`Number of students in ${course}: ${study[course].length}. List: ${study[course].join(', ')}\n`);
        }
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(response.slice(0, -1));
      return undefined;
    });
  }
});

app.listen(port, hostname, () => {
  console.log(`app running at http://${hostname}:${port}/`);
});

module.exports = app;
