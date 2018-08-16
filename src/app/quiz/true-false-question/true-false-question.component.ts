import {Component, Input, OnInit} from '@angular/core';
import { Question } from '../../models/question.model.client';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  @Input() question: Question;

  constructor() { }

  selected = trueOrFalse => {
    this.question.trueFalseAnswer = trueOrFalse;
  }

  ngOnInit() {
  }

}
