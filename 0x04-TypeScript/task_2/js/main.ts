interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string
}


class Director implements DirectorInterface {
    workFromHome() {
        return 'Working from home';
    }

    getCoffeeBreak() {
        return 'Getting a coffee break'
    }

    workDirectorTasks() {
        return 'Getting to director tasks'
    }
}


class Teacher implements TeacherInterface {
    workFromHome() {
        return "Cannot work from home"
    }
    getCoffeeBreak() {
        return "Cannot have a break"
    }
    workTeacherTasks() {
        return "Getting to work"
    }
}

function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
    return typeof salary === 'number' && salary < 500 ? new Teacher() : new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


function isDirector(employee: DirectorInterface | TeacherInterface): boolean {
    return employee.constructor.name === 'Director'
}

function executeWork(employee: DirectorInterface | TeacherInterface) {
    if (isDirector(employee) === true) {
        return (employee as DirectorInterface).workDirectorTasks();
    } else {
        return (employee as TeacherInterface).workTeacherTasks();
    }
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));


type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
    return 'Teaching ' + (todayClass === "Math" ? "Math" : "History");
}

console.log(teachClass("Math"));
console.log(teachClass("History"));
