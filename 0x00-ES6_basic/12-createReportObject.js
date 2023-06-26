export default function createReportObject(employeesList) {
  return {
    getNumberOfDepartments(obj) {
      return Object.keys(obj).length;
    },
    allEmployees: {
      ...employeesList,
    },
  };
}
