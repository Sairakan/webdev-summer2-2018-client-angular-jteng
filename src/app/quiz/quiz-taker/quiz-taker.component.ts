import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../models/quiz.model.client';
import { QuizServiceClient } from '../../services/quiz.service.client';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceClient } from '../../services/user.service.client';
import { User } from '../../models/user.model.client';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  quiz: Quiz;
  description: String;
  user: User;

  constructor(private router: Router,
    private userService: UserServiceClient,
    private quizService: QuizServiceClient,
    private activatedRoute: ActivatedRoute) { }

  submitQuiz(quiz) {
    this.quizService.submitQuiz(quiz)
      .then(() => this.router.navigate(['home']));
  }

  ngOnInit() {
    this.userService
      .profile()
      .then(user => {
        if (!user) {
          alert('please log in');
          this.router.navigate(['login']);
        }
      });
    this.activatedRoute.params.subscribe(params =>
      this.quizService.findQuizById(params['quizId'])
        .then(quiz => this.quiz = quiz));
  }

}
