import { percentageCalculator } from '.././percentage.js';

export function getResults(user) {
    let resultsList = "";

    db.collection("examResult").where("user", "==", user).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            let totalQuestions = data.correctAnswers + data.wrongAnswers;
            let percentage = percentageCalculator(totalQuestions, data.wrongAnswers);
            console.log(percentage);
            resultsList += `<li>
                <article class="card">
                    <h3 class="cardHeader">Exam Name: ${data.exam}</h3>
                    <section class="cardContent">
                        <div><span class="cardFieldLabel">Total Questions:</span> ${totalQuestions}</div>
                        <div><span class="cardFieldLabel">Correct Answers:</span> ${data.correctAnswers}</div>
                        <div><span class="cardFieldLabel">Wrong Answers:</span> ${data.wrongAnswers}</div>
                        <div><span class="cardFieldLabel">Wrong Answers List:</span> ${data.wrongAnswersNumber}</div>
                        <div><span class="cardFieldLabel">Problematic Questions:</span> ${data.problematicQuestions}</div>
                        <div><span class="cardFieldLabel">Date:</span> ${data.date.toDate()}</div>
                        <div><span class="cardFieldLabel">Version:</span> ${data.version}</div>
                        <div><span class="cardFieldLabel">Attempt:</span> ${data.tryNr}</div>
                    </section>`
            if (percentage >= 70) {
                resultsList += `<div class="success cardPercentage">Percentage: ${percentage.toString().substring(0, 5)}%</div>`;
            } else {
                resultsList += `<div class="error cardPercentage">Percentage: ${percentage.toString().substring(0, 5)}%</div>`;
            }
            resultsList += `</article>
            </li>`;
        });

        return results.innerHTML = resultsList;

    });
}