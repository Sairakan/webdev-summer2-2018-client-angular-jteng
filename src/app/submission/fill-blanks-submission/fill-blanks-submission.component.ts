import { Component, OnInit, Input } from '@angular/core';
import { Answer } from '../../models/answer.model.client';

@Component({
  selector: 'app-fill-blanks-submission',
  templateUrl: './fill-blanks-submission.component.html',
  styleUrls: ['./fill-blanks-submission.component.css']
})
export class FillBlanksSubmissionComponent implements OnInit {

  @Input() answer: Answer;
  description: String[];

  constructor() { }

  format(description, i) {
    return description.replace(/&blank/g, '<u>' + this.answer.fillBlanksAnswers[i] + '</u>');
  }

  ngOnInit() {
    this.description = this.answer.question.description.split('\n');
  }

}
