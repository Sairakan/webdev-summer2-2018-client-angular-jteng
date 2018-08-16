import { Component, OnInit, Input } from '@angular/core';
import { Answer } from '../../models/answer.model.client';

@Component({
  selector: 'app-true-false-submission',
  templateUrl: './true-false-submission.component.html',
  styleUrls: ['./true-false-submission.component.css']
})
export class TrueFalseSubmissionComponent implements OnInit {

  @Input() answer: Answer;

  constructor() { }

  ngOnInit() {
  }

}
