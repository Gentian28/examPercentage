import { getPercentage } from './percentage.js';

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
    let list = '';
    let allQuestionsVal = allQuestions.value;
    for (var i = 1; i <= allQuestionsVal; i++) {
        list += `<li>
        <span>Q${i}</span>
            <form>
                <input type="radio" name="answer" value="correct"> Correct
                <input type="radio" name="answer" value="wrong"> Wrong
            </form>
        </li>`;
    }
    allQuestionsForm.style.display = 'none';
    questionsList.innerHTML = list;

    let listItems = questionsList.children;

    // console.log(listItems);

    for (i = 0; i < listItems.length; i++) {
        listItems[i].onclick = function () {
            // console.log(this.children[0].innerText);
        }
    }

}

var correctAnswersList = [];
var wrongAnswersList = [];

document.getElementById('submitTest').onclick = function () {
    correctAnswersList.length = 0;
    wrongAnswersList.length = 0;
    var answers = document.getElementsByName('answer');
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            if (answers[i].value == 'correct') {
                correctAnswersList.push(i);
            } else {
                wrongAnswersList.push(i);
            }
        }
    }
    console.log(correctAnswersList.length);
    console.log(wrongAnswersList.length);
}