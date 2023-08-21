const fs = require('fs')

function countStudents(file_path) {
  return new Promise((resolve, reject) => {
    fs.readFile(file_path, 'utf-8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'))
      }
      const study = {}
      data = data.split('\n');
      data = data.slice(1);
      data = data.filter(arr => arr.length > 1);

      console.log(`Number of students: ${data.length}`);
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
        console.log(`Number of students in CS: ${study[course].length}. List: ${study[course].join(', ')}`);
      }
      resolve('done');
    })
  })
}


module.exports = countStudents