interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [propName: string]: any
}

interface Directors extends Teacher{
  numberOfReports:number,
}

interface printTeacherFunction{
  (firstName:string, lastName:string) : string;
}

function printTeacher(firstName:string, lastName:string): string {
  return `${firstName[0]}. ${lastName}`
}
console.log(printTeacher('Stan','Eze'))


interface IStudentClass{
  firstName:string,
  lastName:string,
  workOnHomework():string,
  displayName():string,
}

interface IStudentConstructor{
  new(firstName:string, lastName:string) : IStudentClass;
}

class StudentClass implements IStudentClass{
  firstName:string;
  lastName:string;
  constructor(firstName:string, lastName:string){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework():string{
    return 'Currently working';
  }

  displayName():string{
    return this.firstName;
  }
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);
