function generateList() {
    let list = '';
    let allQuestionsVal = allQuestions.value;
    for (var i = 1; i <= allQuestionsVal; i++) {
        list += `<li>
        <span>Q${i}</span>
            <form>
                <label class="radioButton">
                    <input type="radio" name="answer" value="correct"> 
                    <span class="checkmark"></span>
                </label>
                <label class="radioButton"> 
                    <input type="radio" name="answer" value="wrong"> 
                    <span class="checkmark"></span>
                </label>
                <label class="customCheckbox">
                    <input type="checkbox" name="problematic" value="problematic">
                    <span class="checkboxMark"></span>
                </label>
            </form>
        </li>`;
    }
    return list;
}

export function populateQuestionsList() {
    questionsList.innerHTML = generateList();
}