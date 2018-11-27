import { questions, wrongAnswers, allQuestions, questionsList } from './variables.js';
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
        <ul>
            <li>Correct</li>
            <li>Wrong</li>
        </ul>
        </li>`;
    }
    document.getElementById('allQuestionsForm').style.display = 'none';
    questionsList.innerHTML = list;

    let listItems = questionsList.children;

    console.log(listItems);

    for (i = 0; i < listItems.length; i++) {
        listItems[i].onclick = function () {
            console.log(this.children[0].innerText);
        }
    }

}