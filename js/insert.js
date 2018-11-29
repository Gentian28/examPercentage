export function insertAnswers(correct, wrong, number) {
    db.collection("examResult").add({
        correctAnswers: correct,
        wrongAnswers: wrong,
        wrongAnswersNumber: number,
        date: new Date()
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}