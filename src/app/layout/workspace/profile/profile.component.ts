import { Component, OnInit } from '@angular/core';
import {Gender, Marital, Race, USER1, UserType} from '../../../mock-data/userInfo';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = USER1;

  profileForm: FormGroup;
  changePassword: boolean = false;

  userType = UserType;
  gender = Gender;
  races = Race;
  maritals = Marital;


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
    })
  }

  goBack() {
    window.history.back();
  }

}
