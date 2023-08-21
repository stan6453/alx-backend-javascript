import {readDatabase} from '../utils';

export class StudentsController{
  static getAllStudents(request, response){
    res.write('This is the list of our students')
    first_names = readDatabase('../database.csv')
    first_name.sort()
    return res.status(200).send('Hello Holberton School!');
  }
}
