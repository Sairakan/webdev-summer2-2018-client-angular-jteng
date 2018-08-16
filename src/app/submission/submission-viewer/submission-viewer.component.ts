import { Component, OnInit } from '@angular/core';
import { QuizServiceClient } from '../../services/quiz.service.client';
import { ActivatedRoute } from '@angular/router';
import { Submission } from '../../models/submission.model.client';
import { Quiz } from '../../models/quiz.model.client';
import { Location } from '@angular/common';

@Component({
  selector: 'app-submission-viewer',
  templateUrl: './submission-viewer.component.html',
  styleUrls: ['./submission-viewer.component.css']
})
export class SubmissionViewerComponent implements OnInit {

  submission: Submission;
  quiz: Quiz;

  constructor(private location: Location,
    private quizService: QuizServiceClient,
    private activatedRoute: ActivatedRoute) { }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>
      this.quizService.findSubmissionById(params.quizId, params.submissionId)
        .then(submission => {
          this.submission = submission;
          this.quiz = this.submission.quiz;
          console.log(this.submission);
        }));
  }

}
