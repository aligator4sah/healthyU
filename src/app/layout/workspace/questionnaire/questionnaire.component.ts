import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import {AnswerItem, Question} from '../../../mock-data/Question';
import {QuestionControlService} from '../../../service/question-control.service';
import {QuestionService} from '../../../service/question.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  userId = JSON.parse(localStorage.getItem('curUser')).id;
  domains = [];
  questions = [];
  answers = [];
  form: FormGroup;
  payLoad = '';

  constructor(
    private questionService: QuestionService,
    private questionaControlService: QuestionControlService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.getDomains();
  }


  getDomains() {
    this.questionService.getAllDomains().subscribe(value => {
      this.domains = value;
      if (this.domains.length > 0) {
        this.getQuestionsByDomain(this.domains[0].id);
      }
    })
  }

  getQuestionsByDomain(id: number) {
    this.questions = [];
    this.answers = [];

    this.questionService.getQuestionByDomain(id).subscribe(value => {
      this.questions = value;
      let group: any = {};
      this.questions.forEach(ques => {
        group[ques.id] = ['', Validators.required];
        const answer = new AnswerItem({
          questionId: ques.id,
          domain: ques.domain,
          weight: ques.weight,
        });
        this.answers.push(answer);
      });
      this.form = this.fb.group(group);
      this.answers.forEach(ans => {
        this.form.controls[ans.questionId].valueChanges.subscribe(value => {
          ans.answer = value
        });
      });
      console.log(this.answers);
    });
  }

  onSubmit() {

  }
}
