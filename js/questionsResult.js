import { correctAnswersList, wrongAnswersList, wrongAnswersNumber } from './variables.js';


class Answers {
    constructor(correctAnswersList, wrongAnswersList, wrongAnswersNumber) {
        this.correctAnswersList = correctAnswersList;
        this.wrongAnswersList = wrongAnswersList;
        this.wrongAnswersNumber = wrongAnswersNumber;
    }
}


export function getAnswers() {
    correctAnswersList.length = 0;
    wrongAnswersList.length = 0;
    wrongAnswersNumber.length = 0;

    var answers = document.getElementsByName('answer');
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            if (answers[i].value == 'correct') {
                correctAnswersList.push(i);
            } else {
                let wrongAnswer = answers[i].parentElement.parentElement.previousElementSibling.textContent;
                wrongAnswersList.push(i);
                wrongAnswersNumber.push(wrongAnswer)
            }
        }
    }

    let answersList = new Answers(correctAnswersList, wrongAnswersList, wrongAnswersNumber);

    return answersList;
    // console.log(answersList);
}