import { Component, OnInit } from '@angular/core';
import {SESSIONDATA} from '../../../mock-data/userInfo';
import {StateService} from '../../../service/state.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  sessions = SESSIONDATA;

  constructor(
    private stateService: StateService,
    private router: Router,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.stateService.curSession$.next(-1);
    })

  }

  goAnsList(id: number) {

  }

  goGraph(id: number) {
    this.stateService.curSession$.next(id);
    this.router.navigateByUrl('/dashboard/score-graph');
  }


}
