import { Component, OnInit } from '@angular/core';
import {StateService} from '../../../service/state.service';

@Component({
  selector: 'app-score-graph',
  templateUrl: './score-graph.component.html',
  styleUrls: ['./score-graph.component.css']
})
export class ScoreGraphComponent implements OnInit {

  sessionId: number;

  constructor(
    private stateService: StateService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.stateService.curSession$.subscribe(value => this.sessionId = value);
    });

  }

}
