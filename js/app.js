import { questions, wrongAnswers } from './variables.js';
import { getPercentage } from './math.js';

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