import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete-card',
  templateUrl: './complete-card.component.html',
  styleUrls: ['./complete-card.component.css']
})
export class CompleteCardComponent implements OnInit {

  curUser = JSON.parse(localStorage.getItem('curUser'));

  constructor() { }

  ngOnInit() {
  }

}
