export class Question {
    _id: String;
    title: String;
    points: Number;
    description: String;
    choices: [{
        text: String,
        value: String,
        correct: Boolean
    }];
    blanks: String[];
    questionType: {
        type: String,
        enum: [
            'ESSAY',
            'FILL_BLANKS',
            'TRUE_FALSE',
            'CHOICE'
        ]
    };
    essayAnswer: String;
    fillBlanksAnswers: String[];
    trueFalseAnswer: Boolean;
    multipleChoiceAnswer: Number;
}
