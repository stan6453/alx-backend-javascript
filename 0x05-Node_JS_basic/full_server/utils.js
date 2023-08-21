export function readDatabase(file_path){
  return new Promise((resolve, reject) => {
    fs.readFile(file_path, 'utf-8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'))
      }
      first_names = []
      data = data.split('\n');
      data = data.slice(1);
      data = data.filter(arr => arr.length > 1);

      for (const row in data){
        columns = row.split(',')
        first_names.push(columns[0])
      }
      resolve(first_names)
    })
  })
}