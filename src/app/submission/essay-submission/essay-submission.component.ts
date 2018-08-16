import { Component, OnInit, Input } from '@angular/core';
import { Answer } from '../../models/answer.model.client';

@Component({
  selector: 'app-essay-submission',
  templateUrl: './essay-submission.component.html',
  styleUrls: ['./essay-submission.component.css']
})
export class EssaySubmissionComponent implements OnInit {

  @Input() answer: Answer;

  constructor() { }

  ngOnInit() {
  }

}
