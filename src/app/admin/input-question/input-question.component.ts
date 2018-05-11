import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DomQuestion, Question} from '../../mock-data/Question';
import "rxjs/add/operator/debounceTime";

@Component({
  selector: 'app-input-question',
  templateUrl: './input-question.component.html',
  styleUrls: ['./input-question.component.css']
})
export class InputQuestionComponent implements OnInit {
  form: FormGroup;
  ansForm: FormGroup;

  inputActive: boolean = true;
  confirmActive: boolean = false;

  question: DomQuestion;

  type = TYPE;
  Domain = null;
  AnsType = ANSTYPE;

  questionType: string;
  optionNum: number;
  options: Options[] = [];
  isQues: boolean = false;
  isText: boolean = false;
  needOptions: boolean = false;

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
      weight: ['', [Validators.required]],
      order: ['', [Validators.required]],
      anstype: ['', [Validators.required]],
      optnum: ['', [Validators.required]],
    });

    this.form.controls["quesType"].valueChanges.subscribe((value) => {
      this.getType(value);
    });

    this.form.controls["optnum"].valueChanges.subscribe((value)=> {
      this.getAnsType(value);
    });
    this.form.controls["optnum"].valueChanges.subscribe((value)=> {
      this.getAnsNumber(value);
    })
  }

  onSubmit() {

  }

  getType(value: string) {
    if(value === "questionnaire") {
     this.isQues = true;
    }
  }

  getAnsType(value: string) {
    if (value === "textbox") {
      this.isText= true;
    } else {
      this.needOptions = true;
    }
  }

  getAnsNumber(optnum: number) {
    let id = 0;
    while (optnum > 0 && id < optnum) {
      let opt = {key: id, extent: id, value: ''};
      this.options.push(opt);
      id++;
    }

    let group: any = {};
    this.options.forEach(option => {
      group[option.extent] = new FormControl(option.extent || Validators.required);
      group[option.key] = new FormControl(option.value || Validators.required);
    });
    this.ansForm = new FormGroup(group);
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

export const ANSTYPE = [
  {key: 'textbox', value: 'Text Input Question'},
  {key: 'dropdown', value: 'Drop Down Question'},
  {key: 'radiobutton', value: 'Radio Button Question'}
];


export class Options {
  key: any;
  extent: number;
  value: string;
}
