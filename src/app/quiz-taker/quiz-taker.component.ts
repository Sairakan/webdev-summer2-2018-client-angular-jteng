import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz.model.client';
import { QuizServiceClient } from '../services/quiz.service.client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  quiz: Quiz;
  description;

  constructor(private quizService: QuizServiceClient,
    private activatedRoute: ActivatedRoute) { }

  format(description) {
    return description.replace(/&blank/g, '?').replace('\n', '<br />');
  }

  submitQuiz(quiz) {
    this.quizService.submitQuiz(quiz)
      .then(submission => console.log(submission));
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>
      this.quizService.findQuizById(params['quizId'])
        .then(quiz => this.quiz = quiz));
  }

}
