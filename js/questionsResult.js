import { correctAnswersList, wrongAnswersList, wrongAnswersNumber, problematicQuestions } from './variables.js';


class Answers {
    constructor(correctAnswersList, wrongAnswersList, wrongAnswersNumber, problematicQuestions) {
        this.correctAnswersList = correctAnswersList;
        this.wrongAnswersList = wrongAnswersList;
        this.wrongAnswersNumber = wrongAnswersNumber;
        this.problematicQuestions = problematicQuestions;
    }
}


export function getAnswers() {
    correctAnswersList.length = 0;
    wrongAnswersList.length = 0;
    wrongAnswersNumber.length = 0;
    problematicQuestions.length = 0;

    var answers = document.getElementsByName('answer');
    var problematic = document.getElementsByName('problematic');

    for (var i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            if (answers[i].value == 'correct') {
                correctAnswersList.push(i);
            } else {
                let wrongAnswer = answers[i].parentElement.parentElement.previousElementSibling.textContent;
                wrongAnswersList.push(i);
                wrongAnswersNumber.push(wrongAnswer);
            }
        }

    }

    for (var i = 0; i < problematic.length; i++) {
        if (problematic[i].checked) {
            let problematicQuestionNumber = problematic[i].parentElement.parentElement.previousElementSibling.textContent;
            problematicQuestions.push(problematicQuestionNumber);
        }
    }

    let answersList = new Answers(correctAnswersList, wrongAnswersList, wrongAnswersNumber, problematicQuestions);

    return answersList;
}