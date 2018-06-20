import { Component, OnInit } from '@angular/core';
import {Gender, Marital, Race, SecurityQues, USER1, UserType} from '../../../mock-data/userInfo';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = USER1;

  profileForm: FormGroup;
  securityForm: FormGroup;
  changePassword: boolean = false;

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


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      username: [this.user.username],
      firstname: [this.user.firstname],
      lastname: [this.user.lastname],
      dob: [this.user.dob],
      role: [this.user.type],
      gender: [this.user.gender],
      phone: [this.user.phone],
      marital: [this.user.marital],
      psd: [this.user.password],
      repsd: [this.user.password],
    });
    this.securityForm = this.fb.group({
      Q1: [this.user.Q1],
      Q2: [this.user.Q2],
      Q3: [this.user.Q3],
      A1: [this.user.A1],
      A2: [this.user.A2],
      A3: [this.user.A3],
    });
  }

  goBack() {
    window.history.back();
  }

  submitProfile() {
    console.log(this.profileForm.value);
  }

  submitSecurity() {
    console.log(this.securityForm.value);
  }

}
