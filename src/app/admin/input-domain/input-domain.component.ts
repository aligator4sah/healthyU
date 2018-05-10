import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-domain',
  templateUrl: './input-domain.component.html',
  styleUrls: ['./input-domain.component.css']
})
export class InputDomainComponent implements OnInit {
  selected: boolean = false;

  permissions: any = [
    {
      type: "Health Related",
      expanded: true,
      rights: [
        {
          name: "Drink",
          enable: true
        },
        {
          name: "Nutrition",
          enable: true
        },
        {
          name: "Smoke",
          enable: false
        },
        {
          name: "Alcoholic",
          enable: false
        }
      ]
    },
    {
      type: "Exercise",
      expanded: true,
      rights: [
        {
          name: "Sports",
          enable: true
        },
        {
          name: "Mobility",
          enable: true
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
