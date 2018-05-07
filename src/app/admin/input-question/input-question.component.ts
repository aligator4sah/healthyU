import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DomQuestion, Question} from '../../mock-data/Question';

@Component({
  selector: 'app-input-question',
  templateUrl: './input-question.component.html',
  styleUrls: ['./input-question.component.css']
})
export class InputQuestionComponent implements OnInit {
  form: FormGroup;
  ansForm: FormGroup;

  question: DomQuestion;


  type = TYPE;
  Domain = DOMAIN;
  Subdomain = SUBDOMAIN;
  AnsType = ANSTYPE;

  questionType: string;
  optionNum: number;
  options: Options[] = [];
  isQues: boolean = false;
  isText: boolean = false;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }


  buildForm() {
    this.form = this.fb.group({
      quesType: ['', [Validators.required]],
      desp: ['', [Validators.required, Validators.minLength(4)]],
      domain: ['', [Validators.required]],
      subdomain: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      order: ['', [Validators.required]],
      optnum: ['', [Validators.required]]
    });
    this.ansForm = this.fb.group({});
  }

  onSubmit() {

  }

  getType() {
    if(this.questionType === "questionnaire") {
     this.isQues = true;
    } else {
      this.question.domain = '';
      this.question.subdomain = '';
      this.question.weight = 0;
    }
  }

  getAnsType() {
    if (this.question.type === "textbox") {
      this.isText= true;
    }
  }

  getAnsNumber() {
    if (this.optionNum > 0) {
      const number = Array.apply(null, {length: this.optionNum}).map(Number.call, Number);
      for (let num of number) {
        let opt = {key: num, extent: '', value: ''};
        this.options.push(opt);
      }
      this.ansForm = new FormGroup({ansKey: new FormControl(), ansValue: new FormControl()});
    }
  }


}

export const TYPE = [
  {key: 'demographic', value: 'Demographic'},
  {key: 'questionnaire', value: 'Questionnaire'},
];

export const DOMAIN = [
  {key: '1', value: 'Physical'},
  {key: '2', value: 'Behavioral'},
  {key: '3', value: 'Spiritual'},
];

export const SUBDOMAIN = [
  {key: '1', value: 'Health related'},
  {key: '2', value: 'Mobility and Exercise'},
  {key: '3', value: 'Smoke and drink'}
];


export const ANSTYPE = [
  {key: 'textbox', value: 'Text Input Question'},
  {key: 'dropdown', value: 'Drop Down Question'},
  {key: 'radiobutton', value: 'Radio Button Question'}
];


export class Options {
  key: any;
  extent: string;
  value: string;
}
