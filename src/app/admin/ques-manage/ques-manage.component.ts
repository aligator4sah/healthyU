import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../../service/question.service';
import {Question} from '../../mock-data/Question';
import {ClrDatagridStringFilterInterface} from '@clr/angular';

@Component({
  selector: 'app-ques-manage',
  templateUrl: './ques-manage.component.html',
  styleUrls: ['./ques-manage.component.css']
})
export class QuesManageComponent implements OnInit {
  quesGroup;
  labelFilter = new LabelFilter();

  constructor(private qs: QuestionService) { }

  ngOnInit() {
    this.quesGroup = this.qs.getHealthQues();
  }

  onEdit(ques: Question) {

  }

  onDelete(ques: Question)  {

  }
}

class LabelFilter implements ClrDatagridStringFilterInterface<Question> {
  accepts(ques: Question, search: string):boolean {
    return "" || ques.label.toLowerCase().indexOf(search) >= 0;
  }
}
