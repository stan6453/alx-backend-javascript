export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);
  const departmentLength = departments.length;
  let currentDepartment = 0;

  if (departmentLength === 0) {
    return {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        return { done: true };
      },
    };
  }

  let employees = report.allEmployees[departments[currentDepartment]];
  let employeesLength = employees.length;
  let currentEmployee = -1;

  const handleEndOfRecord = () => {
    if (currentEmployee === employeesLength || employeesLength === 0) {
      currentDepartment += 1;
      if (currentDepartment >= departmentLength) {
        return 1;
      }

      employees = report.allEmployees[departments[currentDepartment]];
      employeesLength = employees.length;
      currentEmployee = 0;
    }

    if (currentEmployee === employeesLength || employeesLength === 0) {
      return handleEndOfRecord();
    }

    return 0;
  };

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      currentEmployee += 1;

      if (handleEndOfRecord() === 1) {
        return { done: true };
      }

      return {
        value: report.allEmployees[departments[currentDepartment]][currentEmployee],
        done: false,
      };
    },
  };
}
