import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ClrWizard} from '@clr/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Gender, Marital, Race, SecurityQues, UserModel, UserType} from '../mock-data/userInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isValid: boolean = false;
  lgOpen: boolean = false;
  role: string;
  forget: boolean = false;

  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  loginForm: FormGroup;

  user = new UserModel();
  registered: boolean = false;
  userType = UserType;
  gender = Gender;
  races = Race;
  maritals = Marital;

  secureQue = SecurityQues;
  time = [
    {id: 1, qid: 'Q1', aid: 'A1', question: '', answer: ''},
    {id: 2, qid: 'Q2', aid: 'A2', question: '', answer: ''},
    {id: 3, qid: 'Q3', aid: 'A3', question: '', answer: ''},
  ];

  @ViewChild("wizardlg") wizardLarge: ClrWizard;


  constructor(
    private router: Router,
    private fb: FormBuilder,
    ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      loginRole: ['', [Validators.required]]
    });
    this.form1 = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      firstname: ['', []],
      lastname: ['', []],
      psd: ['', [Validators.required, Validators.minLength(6)]],
      repsd: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
    });
    this.form2 = this.fb.group({
      phone: ['', []],
      race: ['', Validators.required],
      marital: ['', Validators.required],
    });
    this.form3 = this.fb.group({
      Q1: ['', [Validators.required]],
      Q2: ['', [Validators.required]],
      Q3: ['', [Validators.required]],
      A1: ['', [Validators.required]],
      A2: ['', [Validators.required]],
      A3: ['', [Validators.required]],
    });
  }

  submit() {
    if (this.role !== undefined) {
      localStorage.setItem("curRole", this.role);
    }
    this.router.navigateByUrl("/dashboard");
  }

  signUp() {
    this.lgOpen = true;
  }

  openForget() {
    this.forget = true;
  }

  register() {
    this.registered = true;
  }

}
