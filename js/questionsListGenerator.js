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
            </form>
        </li>`;
    }
    return list;
    // let listItems = questionsList.children;

    // // console.log(listItems);

    // for (i = 0; i < listItems.length; i++) {
    //     listItems[i].onclick = function () {
    //         // console.log(this.children[0].innerText);
    //     }
    // }
}

export function populateQuestionsList() {
    questionsList.innerHTML = generateList();
}