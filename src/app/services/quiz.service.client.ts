import { Injectable } from '@angular/core';

import { NODE } from './const-url';

@Injectable()
export class QuizServiceClient {
  submitQuiz = quiz =>
    fetch(NODE + '/api/quiz/' + quiz._id + '/submission', {
      method: 'post',
      body: JSON.stringify(quiz),
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(response => response.json())

  createQuiz(quiz) { }

  findAllQuizzes = () =>
    fetch(NODE + '/api/quiz')
      .then(response => response.json())

  findQuizById = quizId =>
    fetch(NODE + '/api/quiz/' + quizId)
      .then(response => response.json())

  findSubmissionsForQuiz = (quizId) =>
    fetch(NODE + '/api/quiz/' + quizId + '/submissions')
      .then(response => response.json())

  findSubmissionById = (quizId, submissionId) =>
    fetch(NODE + '/api/quiz/' + quizId + '/submission/' + submissionId)
      .then(response => response.json())

  updateQuiz(quizId, quiz) { }

  deleteQuiz(quizId) { }
}
