export default function getListStudentIds(arrayOfStudents) {
  if (!Array.isArray(arrayOfStudents)) {
    return [];
  }

  return arrayOfStudents.map((student) => student.id);
}
