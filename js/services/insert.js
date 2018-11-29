export function insertAnswers(correct, wrong, number, user) {
    db.collection("examResult").add({
        correctAnswers: correct,
        wrongAnswers: wrong,
        wrongAnswersNumber: number,
        date: new Date(),
        user: user
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}