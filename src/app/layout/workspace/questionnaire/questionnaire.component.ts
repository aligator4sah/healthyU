import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Question} from '../../../mock-data/Question';
import {QuestionControlService} from '../../../service/question-control.service';
import {QuestionService} from '../../../service/question.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  questionGroup1: Question[] = [];
  questionGroup2: Question[] = [];
  form1: FormGroup;
  form2: FormGroup;
  payLoad = '';

  constructor(
    private qs: QuestionService,
    private qcs: QuestionControlService
  ) { }

  ngOnInit() {
    this.questionGroup1 = this.qs.getQuestions();
    this.form1 = this.qcs.toFormGroup(this.questionGroup1);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form1.value);
  }

}
