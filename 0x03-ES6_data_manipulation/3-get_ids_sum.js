function getStudentIdsSum(students) {
  // Use the reduce function to sum the student ids
  const sumIds = students.reduce((accumulator, student) => accumulator + student.id, 0);
  return sumIds;
}

export default getStudentIdsSum;
