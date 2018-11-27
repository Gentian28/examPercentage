import { questions, wrongAnswers, result } from './variables.js';
import { error } from './messages.js';

function calculatePercentage() {
    let questionsVal = questions.value;
    let wrongAnswersVal = wrongAnswers.value;

    let maxVal = Math.max(wrongAnswersVal, questionsVal);

    if (questionsVal >= maxVal) {
        let percentage = ((questionsVal - wrongAnswersVal) / questionsVal) * 100;
        if (percentage >= 70) {
            return `<div class="message success">${percentage} %</div>`;
        } else {
            return `<div class="message error">${percentage} %</div>`;
        }
    } else {
        return error;
    }

}

export function getPercentage() {
    result.innerHTML = calculatePercentage();
}