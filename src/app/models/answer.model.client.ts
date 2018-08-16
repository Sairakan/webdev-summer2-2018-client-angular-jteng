import { Question } from './question.model.client';

export class Answer {
    question: Question;
    essayAnswer: String;
    fillBlanksAnswers: String[];
    trueFalseAnswer: Boolean;
    multipleChoiceAnswer: Number;
}
