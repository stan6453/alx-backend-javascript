const fs = require('fs');

export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }
      const study = {};
      let tempData = data.split('\n');
      tempData = tempData.slice(1);
      tempData = tempData.filter((arr) => arr.length > 1);

      for (let i = 0; i < tempData.length; i += 1) {
        const row = tempData[i];
        const column = row.split(',');
        if (!study[column[3]]) {
          study[column[3]] = [column[0]];
        } else {
          study[column[3]].push(column[0]);
        }
      }
      return resolve(study);
    });
  });
}
