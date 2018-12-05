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
                        <p>Total Questions: ${totalQuestions}</p>
                        <p>Correct Answers: ${data.correctAnswers}</p>
                        <p>Wrong Answers: ${data.wrongAnswers}</p>
                        <p>Wrong Answers List: ${data.wrongAnswersNumber}</p>
                        <p>Problematic Questions: ${data.problematicQuestions}</p>
                        <p>Date: ${data.date.toDate()}</p>
                        <p>Version: ${data.version}</p>
                        <p>Attempt: ${data.tryNr}</p>
                    </section>
                    <p>Percentage: ${percentage.toString().substring(0, 5)}%</p>
                </article>
            </li>`;
        });

        return results.innerHTML = resultsList;

    });
}