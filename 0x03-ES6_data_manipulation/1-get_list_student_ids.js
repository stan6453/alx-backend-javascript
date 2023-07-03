export default function getListStudentIds(studentsArray) {
  return Array.isArray(studentsArray) ? studentsArray.map((student) => student.id) : [];
}
