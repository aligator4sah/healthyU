import { Injectable } from '@angular/core';
import {DomQuestion, Question} from '../mock-data/Question';

@Injectable()
export class QuestionService {

  constructor() { }

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous

  getDemoQuestion() {
    let questions: Question[] = [
      new Question({
        qid: 1,
        key: '1',
        label: 'How many children do you have?',
        type: 'dropdown',
        ansOptions: [
          {key: '1-2', value: '1 - 2'},
          {key: '3-5', value: '3 - 5'},
        ],
        order: 1,
      }),
      new Question({
        qid: 2,
        key: '2',
        label: 'How many children live with you?',
        type: 'dropdown',
        ansOptions: [],
        order: 2
      }),
      new Question({
        qid: 3,
        key: '3',
        label: 'How many people do you currently live with?',
        type: 'dropdown',
        ansOptions: [],
        order: 3,
      }),
      new Question({
        qid: 4,
        key: '4',
        label: 'Do you own a home?',
        type: 'radiobutton',
        ansOptions: [
          {key: 'yes', value: "Yes"},
          {key: 'no', value: 'No'}
        ],
        order: 4,
      }),
      new Question({
        qid: 5,
        key: '5',
        label: 'Do you rent?',
        type: 'radiobutton',
        ansOptions: [
          {key: 'yes', value: 'Yes'},
          {key: 'no', value: 'No'},
        ],
        order: 5
      }),
      new Question({
        qid: 6,
        key: '6',
        label: 'Are you employed?',
        type: 'radiobutton',
        ansOptions: [
          {key: 'Yes', value: 'Yes'},
          {key: 'no', value: 'No'}
        ],
        order: 6,
      }),
      new Question({
        qid: 7,
        key: '7',
        label: 'How many hours per week do you work?',
        type: 'dropdown',
        ansOptions: [],
        order: 7
      }),
      new Question({
        qid: 8,
        key: '8',
        label: 'Have you served in the Armed Forces?',
        type: 'radiobutton',
        ansOptions: [
          {key: 'yes', value: 'Yes'},
          {key: 'no', value: 'No'}
        ],
        order: 8
      }),
      new Question({
        qid: 9,
        key: '9',
        label: 'Did you graduate from high school or have a GED',
        type: 'radiobutton',
        ansOptions: [
          {key: 'yes', value: 'Yes'},
          {key: 'no', value: 'No'}
        ],
        order: 9
      }),
      new Question({
        qid: 10,
        key: '10',
        label: 'Do you have a valid drivers license?',
        type: 'radiobutton',
        ansOptions: [
          {key: 'yes', value: 'Yes'},
          {key: 'no', value: 'No'}
        ],
        order: 10,
      })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }

  getHealthQues() {
    let questions: Question[] = [
      new DomQuestion({
        qid: 1,
        key: '1',
        label: 'How would you rate your overall health on a scale of 1(very poor health)-4(excellent health)?',
        type: 'dropdown',
        ansOptions: [],
        order: 1,
        domain: 'Physical'
      }),
      new DomQuestion({
        qid: 2,
        key: '2',
        label: 'To what extent do you feel that physical pain prevents you from what you need to do?',
        type: 'dropdown',
        ansOptions: [],
        order: 2,
        domain: 'Physical'
      }),
      new DomQuestion({
        qid: 3,
        key: '3',
        label: 'Do you have enough energy for everyday activities?',
        type: 'dropdown',
        order: 3,
        domain: 'Physical'
      }),
      new DomQuestion({
        qid: 4,
        key: '4',
        label: 'Do you take prescribed medications?',
        type: 'dropdown',
        ansOptions: [
          {key: 'yes', value: 'Yes'},
          {key: 'no', value: 'No'},
        ],
        order: 4,
        domain: 'Physical'
      }),
      new DomQuestion({
        qid: 5,
        key:'5',
        label: 'Are there times when you do not take your prescribed meds when you are supposed to?',
        type: 'dropdown',
        order: 5,
        domain: 'Physical'
      }),
      new DomQuestion({
        qid: 6,
        key: '6',
        label: 'Do you feel rested upon awaking?',
        type: 'dropdown',
        ansOptions: [
          {key: 'yes', value: 'Yes'},
          {key: 'no', value: 'No'},
        ],
        order: 6,
        domain: 'Physical'
      }),
      new DomQuestion({
        qid: 7,
        key: '7',
        label: 'Is your sleep interrupted?',
        type: 'dropdown',
        ansOptions: [
          {key: 'yes', value: 'Yes'},
          {key: 'no', value: 'No'},
        ],
        order: 7,
        domain: 'Physical'
      }),
      new DomQuestion({
        qid: 8,
        key: '8',
        label: 'Do you have nightmares?',
        type: 'dropdown',
        ansOptions: [
          {key: 'yes', value: 'Yes'},
          {key: 'no', value: 'no'},
        ],
        order: 8,
        domain: 'Physical'
      }),
      new DomQuestion({
        qid: 9,
        key: '9',
        label: 'In the last month, how often do you feel stressed?',
        type: 'dropdown',
        ansOptions: [
          {key: 'yes', value: 'Yes'},
          {key: 'no', value: 'No'}
        ],
        order: 9,
        domain: 'Physical'
      })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }

  getMobilityQues() {
    let questions: Question[] = [
      new DomQuestion({
        qid: 1,
        key: '1',
        label: 'Do you have difficulty performing daily tasks?',
        type: 'dropdown',
        ansOptions: [
          {key: 'yes', value: 'Yes'},
          {key: 'no', value: 'No'}
        ],
        order: 1
      }),
      new DomQuestion({
        qid: 2,
        key: '2',
        label: 'Have you found that you are doing tasks less frequently? ',
        type: 'dropdown',
        ansOptions: [
          {key: 'yes', value: 'Yes'},
          {key: 'no', value: 'No'}
        ],
        order: 2,
      }),
      new DomQuestion({
        qid: 3,
        key: '3',
        label: 'Have you found that you are doing tasks in a different way that you used to do them',
        type: 'dropdown',
        order: 3,
      }),
      new DomQuestion({
        qid: 4,
        key: '4',
        label: 'How satisfied are you with your ability to ambulated or move around?',
        type: 'dropdown',
        order: 4,
      }),
      new DomQuestion({
        qid: 5,
        key: '5',
        label: 'Are you able to run errands and shop without assitance?',
        type: 'dropdown',
        order: 5
      }),
      new DomQuestion({
        qid: 6,
        key: '6',
        label: 'How many times a week do you exercise weekly?',
        type: 'dropdown',
        order: 6,
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }

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
