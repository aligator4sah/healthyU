import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isValid: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.router.navigateByUrl("/login/register");
  }

}
