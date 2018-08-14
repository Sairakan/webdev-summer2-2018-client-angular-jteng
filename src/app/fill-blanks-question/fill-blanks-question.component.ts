import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fill-blanks-question',
  templateUrl: './fill-blanks-question.component.html',
  styleUrls: ['./fill-blanks-question.component.css']
})
export class FillBlanksQuestionComponent implements OnInit {

  @Input() question;
  fillBlanksAnswers = [];

  constructor() { }

  format(description) {
    return description.replace(/&blank/g, '?').replace('\n', '<br />');
  }

  ngOnInit() {
    this.question.fillBlanksAnswers = this.fillBlanksAnswers;
  }

}
