// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

// Store the students in an array
const studentsList: Student[] = [student1, student2];

// Select the table's <tbody> element using TypeScript
const tbody = document.querySelector("table tbody");

// Iterate through the students and create table rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  tbody?.appendChild(row); // Use optional chaining to ensure tbody exists
});
