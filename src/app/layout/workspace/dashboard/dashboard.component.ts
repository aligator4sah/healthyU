import { Component, OnInit } from '@angular/core';
import {DOMAINS} from '../../../mock-data/userInfo';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  domains = DOMAINS;
  domainForm: FormGroup;
  selectedDomain: string = 'Overall';

  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Your score'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Average'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.domainForm = this.fb.group({
      domain: ['Overall']
    });
    this.domainForm.controls['domain'].valueChanges.subscribe(value => {
      this.selectedDomain = value;
      this.randomize();
    });
  }

  randomize() {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

}
