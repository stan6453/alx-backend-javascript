const fs = require('fs');

function countStudents(filePath) {
  let data;
  const study = {};
  try {
    data = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  data = data.split('\n');
  data = data.slice(1);
  data = data.filter((arr) => arr.length > 1);

  console.log(`Number of students: ${data.length}`);

  for (let i = 0; i < data.length; i += 1) {
    const row = data[i];
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
}

module.exports = countStudents;
