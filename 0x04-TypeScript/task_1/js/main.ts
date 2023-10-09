interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any; // Allow additional attributes with any type
  }

interface Directors extends Teacher {
  numberOfReports: number;
  }

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const initial = firstName.charAt(0); // Get the first letter of firstName
  return `${initial}. ${lastName}`;
  };

// Task 4
// Step 1: Create an Interface for the Constructor
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Step 2: Create the StudentClass Class
class StudentClass implements StudentConstructor {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

