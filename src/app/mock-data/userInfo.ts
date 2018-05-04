/** User info class defination */

export class UserModel {
  firstName: string;
  lastName: string;
  employeeType: string;
  username: string;
  gender: string;
  phone: string;
  email: string;

  constructor(options: {
    firstName?: string,
    lastName?: string,
    emplyeeType?: string,
    username?: string,
    gender?: string,
    phone?: string,
    email?: string,
  } = {}) {
    this.firstName = options.firstName || '';
    this.lastName = options.lastName || '';
    this.employeeType = options.emplyeeType || '';
    this.username = options.username || '';
    this.gender = options.gender || '';
    this.phone = options.phone || '';
    this.email = options.email || '';
  }
}


/** user info related data*/
export const UserType = [
  {key: "student", value: "Student"},
  {key: "faculty", value: "Faculty"},
  {key: "staff", value: "Staff"},
];


export const Gender = [
  {key: 'male', value: "Male"},
  {ley: 'female', value: 'Female'},
];
