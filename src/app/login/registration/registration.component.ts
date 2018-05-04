import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Gender, UserModel, UserType} from '../../mock-data/userInfo';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model = new UserModel();
  employeeForm: FormGroup;
  submitted: boolean = false;
  userType = UserType;
  gender = Gender;
  date = null;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      username: ['', Validators.required, Validators.minLength(4)],
      firstname: ['', []],
      lastname: ['', []],
      role: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      phone: ['', []],
      email: ['', []],
    });
  }

  onSubmit() {
    this.submitted = true;
  }


}

