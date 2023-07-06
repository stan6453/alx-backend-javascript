interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: 'Remy',
  lastName: 'Eze',
  age: 18,
  location: 'lagos'
};

const student2: Student = {
  firstName: 'Ivan',
  lastName: 'Eze',
  age: 27,
  location: 'anambra'
};

const studentsList: Student[] = [student1, student2]

console.table(studentsList.map((elem)=>({firstName:elem.firstName, location:elem.location})))
