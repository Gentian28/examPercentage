import { percentageCalculator } from '.././percentage.js';

export function getResults(user) {
    let resultsList = "";

    db.collection("examResult").where("user", "==", user).orderBy("date").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            let totalQuestions = data.correctAnswers + data.wrongAnswers;
            let percentage = percentageCalculator(totalQuestions, data.wrongAnswers);
            resultsList += `<li>
                <article class="card">
                    <section class="cardHeader flex space-between align-center">
                        <h3>Exam: ${data.exam}</h3>
                        <span class="cardDate">${data.date.toDate().toString().substring(4, 15)}</span>
                    </section>
                    <section class="cardContent">
                        <div><span class="cardFieldLabel">Total Questions:</span> ${totalQuestions}</div>
                        <div><span class="cardFieldLabel">Correct Answers:</span> ${data.correctAnswers}</div>
                        <div><span class="cardFieldLabel">Wrong Answers:</span> ${data.wrongAnswers}</div>
                        <div><span class="cardFieldLabel">Version:</span> ${data.version}</div>
                        <div><span class="cardFieldLabel">Attempt:</span> ${data.tryNr}</div>
                    </section>
                    <section class="cardList flex justify-center align-center">
                        <div class="cardListItem">
                            <p>Wrong Answers List</p>
                            <div>
                                <p class="cardHeader cardListHeader flex space-between align-center"><span>Wrong Answers List</span><img src="images/icons/close.png" alt="Close" class="closeList" title="Close"></p>
                                <div class="cardContent">${data.wrongAnswersNumber}</div>
                            </div>
                        </div>
                        <div class="cardListItem">
                            <p>Problematic Questions</p>
                            <div>
                                <p class="cardHeader cardListHeader flex space-between align-center"><span>Problematic Questions</span><img src="images/icons/close.png" alt="Close" class="closeList" title="Close"></p>
                                <div class="cardContent">${data.problematicQuestions}</div>
                            </div>
                        </div>
                    </section>
                    `
            if (percentage >= 70) {
                resultsList += `<section class="success cardPercentage">Percentage: ${percentage.toString().substring(0, 5)}%</section>`;
            } else {
                resultsList += `<section class="error cardPercentage">Percentage: ${percentage.toString().substring(0, 5)}%</section>`;
            }
            resultsList += `</article>
            </li>`;
        });

        return results.innerHTML = resultsList;
    });
}