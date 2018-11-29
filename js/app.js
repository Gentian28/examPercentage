import { getPercentage } from './percentage.js';
import { populateQuestionsList } from './questionsListGenerator.js';
import { getAnswers } from './questionsResult.js';
import { insertAnswers } from './insert.js';
// import { setContentHeight } from './viewport.js';

wrongAnswers.oninput = function () {
    getPercentage();
}

questions.oninput = function () {
    if (this.value == "" || this.value <= 0) {
        wrongAnswers.setAttribute("disabled", "");
    } else {
        wrongAnswers.removeAttribute("disabled");
    }
}

generateQuestionsList.onclick = function () {
    numberOfQuestionsForm.style.display = 'none';
    questionsListSections.style.display = 'flex';
    populateQuestionsList();
}

submitTest.onclick = function () {
    let correctAnswers = getAnswers().correctAnswersList.length;
    let wrongAnswers = getAnswers().wrongAnswersList.length;
    let wrongNumbers = getAnswers().wrongAnswersNumber;
    insertAnswers(correctAnswers, wrongAnswers, wrongNumbers);
}

window.onload = function () {
    // setContentHeight()
}

window.onresize = function () {
    // setContentHeight()
}

trackExamTab.onclick = function () {
    percentageCalculator.style.display = 'none';
    numberOfQuestionsForm.style.display = 'block';
}
calculatePercentageTab.onclick = function () {
    numberOfQuestionsForm.style.display = 'none';
    percentageCalculator.style.display = 'flex';
}