export function insertAnswers(correct, wrong, number, problematic, user, exam, version, tryNr) {
    db.collection("examResult").add({
        correctAnswers: correct,
        wrongAnswers: wrong,
        wrongAnswersNumber: number,
        problematicQuestions: problematic,
        date: new Date(),
        user: user,
        exam: exam,
        version: version,
        tryNr: tryNr
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}