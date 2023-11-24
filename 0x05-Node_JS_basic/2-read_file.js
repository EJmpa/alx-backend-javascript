const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').split('\n');
    const students = data.slice(1).map((student) => student.split(',')).filter((student) => student.length === 4 && student[0] !== '');

    console.log(`Number of students: ${students.length}`);

    const fields = [...new Set(students.map((student) => student[3]))];

    fields.forEach((field) => {
      const studentsInField = students.filter((student) => student[3] === field);
      console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.map((student) => student[0]).join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
