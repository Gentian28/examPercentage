import { percentageCalculator } from '.././percentage.js';

export function getResults(user) {
    let resultsList = "";

    db.collection("examResult").where("user", "==", user).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            let totalQuestions = data.correctAnswers + data.wrongAnswers;
            resultsList += `<li>
                <ul>
                    <li>Total Questions: ${totalQuestions}</li>
                    <li>Correct Answers: ${data.correctAnswers}</li>
                    <li>Wrong Answers: ${data.wrongAnswers}</li>
                    <li>Wrong Answers List: ${data.wrongAnswersNumber}</li>
                    <li>Problematic Questions: ${data.problematicQuestions}</li>
                    <li>Date: ${data.date.toDate()}</li>
                    <li>Exam Name: ${data.exam}</li>
                    <li>Version: ${data.version}</li>
                    <li>Attempt: ${data.tryNr}</li>
                    <li>Percentage: ${percentageCalculator(totalQuestions, data.wrongAnswers)}%</li>
                </ul>
            </li>`;
        });

        return results.innerHTML = resultsList;

    });
}