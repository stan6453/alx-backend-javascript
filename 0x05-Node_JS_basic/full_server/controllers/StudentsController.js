import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    const databaseName = process.argv[2];
    return readDatabase(databaseName)
      .then((courses) => {
        let result = 'This is the list of our students\n';
        const courseNames = Object.keys(courses);
        courseNames.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        for (const course of courseNames) {
          result += `Number of students in ${course}: ${courses[course].length}. List: ${courses[course].join(', ')}\n`;
        }
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.send(result.slice(0, -1));
      }).catch(() => {
        response.statusCode = 500;
        response.setHeader('Content-Type', 'text/plain');
        response.end('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const databaseName = process.argv[2];
    const { major } = request.params;

    if (!['CS', 'SWE'].includes(major)) {
      response.setHeader('Content-Type', 'text/plain');
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    return readDatabase(databaseName)
      .then((courses) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.send(`List: ${courses[major].join(', ')}`);
      }).catch(() => {
        response.statusCode = 500;
        response.setHeader('Content-Type', 'text/plain');
        response.end('Cannot load the database');
      });
  }
}
