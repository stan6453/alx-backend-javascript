export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name (){
    return this._name
  }

  set name(name){
    verifyDataType(name, 'string', 'Name must be a string');
    this._name = name
  }

  get length (){
    return this._length
  }

  set length(length){
    verifyDataType(length, 'number', 'Length must be a number');
    this._length = length
  }

  get students (){
    return this._students
  }

  set students(students){
    verifyDataType(students, 'array', 'Students must be an array');
    this._students = students;
  }
}

function verifyDataType(data, datatype, errMessage){
  if (datatype === 'array' && !Array.isArray(data)){
    throw new TypeError(errMessage)
  } else if (datatype === 'array' && Array.isArray(data)){
    return;
  }

  if (typeof(data) !== datatype){
    throw new TypeError(errMessage)
  }
}