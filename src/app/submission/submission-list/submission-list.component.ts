import { Component, OnInit } from '@angular/core';
import { QuizServiceClient } from '../../services/quiz.service.client';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from '../../models/quiz.model.client';
import { Submission } from '../../models/submission.model.client';
import { formatDate } from 'node_modules/@angular/common';

@Component({
  selector: 'app-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./submission-list.component.css']
})
export class SubmissionListComponent implements OnInit {

  quiz: Quiz;
  submissions: [Submission];

  constructor(private quizService: QuizServiceClient,
    private activatedRoute: ActivatedRoute) { }

  format(date) {
    return formatDate(date, 'medium', 'local');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>
      this.quizService.findQuizById(params['quizId'])
        .then(quiz => {
          this.quiz = quiz;
          this.quizService.findSubmissionsForQuiz(this.quiz._id)
            .then(submissions => {
              this.submissions = submissions;
            });
        }));
  }

}
