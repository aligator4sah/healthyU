import { Injectable } from '@angular/core';
import {DomQuestion, Question} from '../mock-data/Question';

@Injectable()
export class QuestionService {

  constructor() { }

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous


  getQuestions() {

    let questions: Question[] = [

      new DomQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        type: 'dropdown',
        ansOptions: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new DomQuestion({
        key: 'firstName',
        label: 'First name',
        type: 'textbox',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new DomQuestion({
        qid: 4,
        key: 'braveeee',
        label: 'Bravery Ratingeeee',
        type: 'radiobutton',
        ansOptions: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'}
        ],
        order: 4
      }),

      new DomQuestion({
        key: 'emailAddress',
        type: 'textbox',
        label: 'Email',
        order: 2
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }

}
