import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ClrWizard} from '@clr/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Gender, SecurityQues, UserModel, UserType} from '../mock-data/userInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isValid: boolean = false;
  lgOpen: boolean = false;

  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  user = new UserModel();
  registered: boolean = false;
  userType = UserType;
  gender = Gender;
  secureQue = SecurityQues;
  time = [1, 2, 3];

  @ViewChild("wizardlg") wizardLarge: ClrWizard;


  constructor(
    private router: Router,
    private fb: FormBuilder,
    ) { }

  ngOnInit() {
    this.form1 = this.fb.group({
      username: ['', Validators.required, Validators.minLength(4)],
      firstname: ['', []],
      lastname: ['', []],
      role: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
    });
    this.form2 = this.fb.group({
      phone: ['', []],
      email: ['', []],
    });
    this.form3 = this.fb.group({
      q1: ['', []],
      q2: ['', []],
      q3: ['', []]
    });
  }

  submit() {
    this.router.navigateByUrl("/dashboard");
  }

  signUp() {
    this.lgOpen = true;

  }

  register() {
    this.registered = true;
  }

}
