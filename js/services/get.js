export function getResults(user) {
    let resultsList = "";

    db.collection("examResult").where("user", "==", user).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            resultsList += `<li>
                <ul>
                    <li>Correct Answers: ${data.correctAnswers}</li>
                    <li>Wrong Answers: ${data.wrongAnswers}</li>
                    <li>Wrong Answers List: ${data.wrongAnswersNumber}</li>
                    <li>Problematic Questions: ${data.problematicQuestions}</li>
                    <li>Date: ${data.date.toDate()}</li>
                    <li>Exam Name: ${data.exam}</li>
                    <li>Version: ${data.version}</li>
                    <li>Attempt: ${data.tryNr}</li>
                </ul>
            </li>`;
        });

        return results.innerHTML = resultsList;

    });
}