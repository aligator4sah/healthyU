import { Component, OnInit } from '@angular/core';
import {SESSIONDATA} from '../../../mock-data/userInfo';
import {StateService} from '../../../service/state.service';
import {Router} from '@angular/router';
import {QuestionService} from '../../../service/question.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  userId = JSON.parse(localStorage.getItem('curUser')).id;
  sessions: any;

  //sessions = SESSIONDATA;

  constructor(
    private stateService: StateService,
    private questionService: QuestionService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getSession();
    setTimeout(() => {
      this.stateService.curSession$.next(-1);
    })
  }

  getSession() {
    this.questionService.getSessionByUser(this.userId).subscribe(value => {
      this.sessions = value;
      //console.log(value);
    })
  }

  goAnsList(id: number) {

  }

  goGraph(id: number) {
    this.stateService.curSession$.next(id);
    this.router.navigateByUrl('/dashboard/score-graph');
  }


}
