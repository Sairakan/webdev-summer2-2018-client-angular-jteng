import { Quiz } from './quiz.model.client';
import { User } from './user.model.client';
import { Answer } from './answer.model.client';

export class Submission {
    _id: String;
    student: User;
    quiz: Quiz;
    answers: Answer[];
    createdAt: Date;
}
