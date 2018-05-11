import { Component, OnInit } from '@angular/core';
import {DomQuestion, Question} from '../../mock-data/Question';
import {QuestionService} from '../../service/question.service';
import {ClrDatagridStringFilterInterface} from '@clr/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-input-domain',
  templateUrl: './input-domain.component.html',
  styleUrls: ['./input-domain.component.css']
})
export class InputDomainComponent implements OnInit {
  createDom: boolean = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
      this.form = this.fb.group({
        domain: ['', [Validators.required]],
        weight: ['', [Validators.required]],
      });
  }

  addDomain() {
      this.createDom = !this.createDom;
  }

  submit() {
    console.log(this.form.value);
    this.createDom = false;
  }

}
