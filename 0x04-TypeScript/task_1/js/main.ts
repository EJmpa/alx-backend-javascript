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
