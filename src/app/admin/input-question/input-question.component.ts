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

    this.ansForm = this.fb.group({});
    this.form.controls["quesType"].valueChanges.subscribe((value) => {
      this.getType(value);
    });
    this.form.controls["anstype"].valueChanges.subscribe((value)=> {
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
    this.options = [];
    while (optnum > 0 && id < optnum) {
      let opt = {key: id, eid: 'Q' + id, extent: id, value: ''};
      this.options.push(opt);
      id++;
    }

    let group: any = {};
    this.options.forEach(option => {
      group[option.eid] = ['', Validators.required]
      group[option.key] = [option.value, Validators.required]
    });
    this.ansForm = this.fb.group(group);

    for (let opt of this.options) {
      this.ansForm.controls[opt.eid].valueChanges.subscribe(value => opt.extent = value);
      this.ansForm.controls[opt.key].valueChanges.subscribe(value => opt.value = value);
    }
    //this.form.addControl("nested",this.ansForm);
  }

  confirm() {
    this.inputActive = false;
    this.confirmActive = true;
    console.log(this.ansForm.value);
  }

  back() {
    this.inputActive = true;
    this.confirmActive = false;
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
  key: number;
  eid: string;
  extent: number;
  value: string;
}
