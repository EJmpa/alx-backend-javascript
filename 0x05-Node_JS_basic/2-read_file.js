const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw Error('Cannot load the database');
  }
  const data = fs.readFileSync(path, 'utf8');
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
};

module.exports = countStudents;
