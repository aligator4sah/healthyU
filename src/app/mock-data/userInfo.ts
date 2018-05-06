/** User info class defination */

export class UserModel {
  firstName: string;
  lastName: string;
  type: string;
  username: string;
  gender: string;
  phone: string;
  email: string;
  q1: any;
  q2: any;
  q3: any;

  constructor(options: {
    firstName?: string,
    lastName?: string,
    type?: string,
    username?: string,
    gender?: string,
    phone?: string,
    email?: string,
    q1?: any,
    q2?: any,
    q3?: any,

  } = {}) {
    this.firstName = options.firstName || '';
    this.lastName = options.lastName || '';
    this.type = options.type || '';
    this.username = options.username || '';
    this.gender = options.gender || '';
    this.phone = options.phone || '';
    this.email = options.email || '';
    this.q1 = options.q1 || {};
    this.q2 = options.q2 || {};
    this.q3 = options.q3 || {};
  }
}


export class securQue {
  question: string;
  answer: string;
  constructor(options: {
    question?: string,
    answer?: string
  } = {}) {
    this.question = options.question || '';
    this.answer = options.answer || '';
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


export const SecurityQues = [
  {key: 'Q1', value: "What's your mother's middle name?"},
  {key: 'Q2', value: "What is your favorite animal?"},
  {key: 'Q3', value: "What is your favorite vocation place?"}
];
