import { Component, OnInit, Input } from '@angular/core';
import { Answer } from '../../models/answer.model.client';

@Component({
  selector: 'app-multiple-choice-submission',
  templateUrl: './multiple-choice-submission.component.html',
  styleUrls: ['./multiple-choice-submission.component.css']
})
export class MultipleChoiceSubmissionComponent implements OnInit {

  @Input() answer: Answer;

  constructor() { }

  selected(i) {
    console.log(i);
    if (this.answer.multipleChoiceAnswer === i) {
      return 'selected';
    } else {
      return '';
    }
  }

  ngOnInit() {
  }

}
