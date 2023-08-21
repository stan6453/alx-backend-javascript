const express = require('express')
const app = express()
const port = 1245

const fs = require('fs')
const database = process.argv[2]

app.get('/', (req, res) => {
  res.send('Hello Holberton School!')
})

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n')

  return new Promise((resolve, reject) => {
    fs.readFile(database, 'utf-8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'))
      }
      const study = {}
      data = data.split('\n');
      data = data.slice(1);
      data = data.filter(arr => arr.length > 1);

      res.write(`Number of students: ${data.length}\n`);
      for (let i = 0; i < data.length; i++) {
        row = data[i];
        column = row.split(',')
        if (!study[column[3]]) {
          study[column[3]] = [column[0]]
        } else {
          study[column[3]].push(column[0])
        }
      }
      for (course in study) {
        res.write(`Number of students in CS: ${study[course].length}. List: ${study[course].join(', ')}\n`);
      }
      res.end()
      resolve('done');
    })
  })
})

app.listen(port, () => {
  console.log(`Listening port on ${port}`)
})

module.exports = app