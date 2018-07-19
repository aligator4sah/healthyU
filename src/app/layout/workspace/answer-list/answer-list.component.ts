import { Component, OnInit } from '@angular/core';
import {StateService} from '../../../service/state.service';
import {QuestionService} from '../../../service/question.service';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {

  sessionId: number;
  answers: any;

  constructor(
    private stateService: StateService,
    private questionService: QuestionService,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.sessionId = this.stateService.curSession$.getValue();
      this.questionService.getAnswersBySession(this.sessionId).subscribe(value => {
        this.answers = value;
        console.log(this.answers);
      })
    })
  }

}
