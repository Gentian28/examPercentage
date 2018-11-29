import { getPercentage } from './percentage.js';
import { populateQuestionsList } from './questionsListGenerator.js';
import { getAnswers } from './questionsResult.js';
import { insertAnswers } from './services/insert.js';
import { tabs } from './functions.js';
import { getResults } from './services/get.js';

wrongAnswers.oninput = function () {
    getPercentage();
}

questions.oninput = function () {
    if (this.value == "" || this.value <= 0) {
        wrongAnswers.setAttribute("disabled", "");
    } else {
        wrongAnswers.removeAttribute("disabled");
    }
}

generateQuestionsList.onclick = function () {
    numberOfQuestionsForm.style.display = 'none';
    questionsListSections.style.display = 'flex';
    populateQuestionsList();
}

submitTest.onclick = function () {
    var user = firebase.auth().currentUser;
    if (user) {
        var email = user.email;
        let correctAnswers = getAnswers().correctAnswersList.length;
        let wrongAnswers = getAnswers().wrongAnswersList.length;
        let wrongNumbers = getAnswers().wrongAnswersNumber;
        insertAnswers(correctAnswers, wrongAnswers, wrongNumbers, email);
    } else {
        alert('You need to login');
    }
}

window.onload = function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var getCurrentUser = firebase.auth().currentUser;
            var currentUser = getCurrentUser.email;
            getResults(currentUser);
        } else {
            results.innerHTML = 'You need to login';
        }
    });
}


window.onresize = function () {
    // setContentHeight()
}

let tabList = document.querySelectorAll('.tab-list');
let tabsContentList = document.querySelectorAll('.tabs-content-list');
tabs(tabList, tabsContentList);

create.onclick = function () {
    let myEmail = email.value;
    let myPassword = password.value;
    firebase.auth().createUserWithEmailAndPassword(myEmail, myPassword).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
    });
}

login.onclick = function () {
    let myEmail = loginMail.value;
    let myPassword = loginPass.value;

    firebase.auth().signInWithEmailAndPassword(myEmail, myPassword).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
        // ...


    });
}
signout.onclick = function () {
    firebase.auth().signOut().then(function () {
        console.log('Sign-out successful');
    }).catch(function (error) {
        // An error happened.
    });
}
getUser.onclick = function () {
    var user = firebase.auth().currentUser;

    if (user != null) {
        console.log(user);
        authentication.innerHTML = 'none';
    } else {
        console.log('No user is logged in');
    }
}


googleAuth.onclick = function () {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
}

firebase.auth().getRedirectResult().then(function (result) {
    if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // ...
    }
    // The signed-in user info.
    var user = result.user;
}).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
});


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        authentication.innerHTML = `${user.displayName}`;
        console.log('Is signed in');
        console.log(user.displayName);
    } else {
        authentication.innerHTML = 'Login';
    }
});