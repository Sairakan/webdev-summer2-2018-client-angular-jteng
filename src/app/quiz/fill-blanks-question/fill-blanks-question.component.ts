import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/question.model.client';

@Component({
  selector: 'app-fill-blanks-question',
  templateUrl: './fill-blanks-question.component.html',
  styleUrls: ['./fill-blanks-question.component.css']
})
export class FillBlanksQuestionComponent implements OnInit {

  @Input() question: Question;
  fillBlanksAnswers: String[];

  constructor() { }

  format(description) {
    return description.replace(/&blank/g, '?').replace('\n', '<br />');
  }

  ngOnInit() {
      this.question.fillBlanksAnswers = [];
  }

}
