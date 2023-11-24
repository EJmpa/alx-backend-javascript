const fs = require('fs');

const countStudents = async (path) => {
  let data;
  try {
    data = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    throw Error('Cannot load the database');
  }
  let students = data.split('\n');
  students.shift();
  students = students.filter((student) => student !== '');

  const csStudents = students.filter((student) => student.endsWith('CS'))
    .map((student) => {
      const info = student.split(',');
      return info[0];
    });

  const sweStudents = students.filter((student) => student.endsWith('SWE'))
    .map((student) => {
      const info = student.split(',');
      return info[0];
    });

  console.log(`Number of students: ${students.length}`);
  console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
  console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  return { students, csStudents, sweStudents };
};

module.exports = countStudents;
