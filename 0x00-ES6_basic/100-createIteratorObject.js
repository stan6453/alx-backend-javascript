export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);
  const departmentLength = departments.length;
  let currentDepartment = 0;

  let employees = report.allEmployees[departments[currentDepartment]];
  let employeesLength = employees.length;
  let currentEmployee = -1;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      currentEmployee += 1;

      if (currentEmployee === employeesLength || employeesLength === 0) {
        currentDepartment += 1;
        if (currentDepartment >= departmentLength) {
          return { done: true };
        }

        employees = report.allEmployees[departments[currentDepartment]];
        employeesLength = employees.length;
        currentEmployee = 0;
      }

      return {
        value: report.allEmployees[departments[currentDepartment]][currentEmployee],
        done: false,
      };
    },
  };
}
