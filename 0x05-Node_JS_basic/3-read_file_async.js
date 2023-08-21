const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }
      const study = {};
      let tempData = data.split('\n');
      tempData = tempData.slice(1);
      tempData = tempData.filter((arr) => arr.length > 1);

      console.log(`Number of students: ${tempData.length}`);
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
          console.log(`Number of students in ${course}: ${study[course].length}. List: ${study[course].join(', ')}`);
        }
      }
      resolve('done');
      return undefined;
    });
  });
}

module.exports = countStudents;
