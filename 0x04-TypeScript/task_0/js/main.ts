export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students, and create an array named studentsList containing
// the two variables
const student1: Student = {
  firstName: "Eric",
  lastName: "Ija",
  age: 38,
  location: "Nairobi, Kenya",
};

const student2: Student = {
  firstName: "Timothy",
  lastName: "Mwolo",
  age: 29,
  location: "Nairobi, Kenya",
};

// Array of students
const studentsList: Array<Student> = [
  student1,
  student2,
];

// Using Vanilla Javascript, render a table and for each elements in the
// array, append a new row to the table
function renderTable() {
  const table = document.createElement("table");

  for (const student of studentsList) {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;

    row.appendChild(firstNameCell);

    const locationCell = document.createElement("td");

    locationCell.textContent = student.location;

    row.appendChild(locationCell);

    table.appendChild(row);
  }
  document.body.appendChild(table);
}

renderTable();
