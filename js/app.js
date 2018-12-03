import { getPercentage } from './percentage.js';
import { populateQuestionsList } from './questionsListGenerator.js';
import { getAnswers } from './questionsResult.js';
import { insertAnswers } from './services/insert.js';
import { tabs } from './functions.js';
import { hideModal, setModal } from './modal.js'
// import * as authentication from './authentication/authentication.js';

// toggle wrong Answers disabled attribute
questions.oninput = function () {
    if (this.value == "" || this.value <= 0) {
        wrongAnswers.setAttribute("disabled", "");
    } else {
        wrongAnswers.removeAttribute("disabled");
    }
}

// calculate percentage
wrongAnswers.oninput = function () {
    getPercentage();
}

// generates and populates questions list
generateQuestionsList.onclick = function () {
    numberOfQuestionsForm.style.display = 'none';
    questionsListSections.style.display = 'flex';
    populateQuestionsList();
}

closeQuestionsList.onclick = function () {
    numberOfQuestionsForm.style.display = 'flex';
    questionsListSections.style.display = 'none';
}

// submit exam answers
submitTest.onclick = function () {
    var user = firebase.auth().currentUser;
    if (user) {
        examDetails.style.display = 'block';
        var email = user.email;
        let correctAnswers = getAnswers().correctAnswersList.length;
        let wrongAnswers = getAnswers().wrongAnswersList.length;
        let wrongNumbers = getAnswers().wrongAnswersNumber;
        let problematic = getAnswers().problematicQuestions;
        submitExam.onclick = function () {
            let examVal = exam.value;
            let versionVal = version.value;
            let tryNrVal = tryNr.value;
            examDetails.style.display = 'none';
            numberOfQuestionsForm.style.display = 'flex';
            questionsListSections.style.display = 'none';
            setModal('Exam result was inserted successfuly');
            insertAnswers(correctAnswers, wrongAnswers, wrongNumbers, problematic, email, examVal, versionVal, tryNrVal);
        }
    } else {
        alert('You need to login');
    }
}


// add tabs functionality to menu
let tabList = document.querySelectorAll('.tab-list');
let tabsContentList = document.querySelectorAll('.tabs-content-list');
tabs(tabList, tabsContentList);

// getUser.onclick = function () {
//     var user = firebase.auth().currentUser;

//     if (user != null) {
//         console.log(user);
//     } else {
//         console.log('No user is logged in');
//     }
// }

var signToggle = document.getElementsByClassName('signToggle')[0].children;
var authenticationsFormContainer = document.getElementsByClassName('authenticationsFormContainer')[0].children;
// console.log(signToggle);

signToggle[0].onclick = function () {
    this.nextElementSibling.classList.remove('active');
    this.classList.add('active');
    authenticationsFormContainer[0].classList.add('active');
    authenticationsFormContainer[0].nextElementSibling.classList.remove('active');
}
signToggle[1].onclick = function () {
    this.previousElementSibling.classList.remove('active');
    this.classList.add('active');
    authenticationsFormContainer[1].classList.add('active');
    authenticationsFormContainer[1].previousElementSibling.classList.remove('active');
}

document.getElementsByClassName('modalContainer').onclick = function () {
    console.log(1);
    this.style.display = 'none';
}

// let modalContainer = document.getElementsByClassName('modalContainer');
// for (var i = 0; i < modalContainer.length; i++) {
//     modalContainer[i].onclick = function () {
//         this.style.display = 'none';
//     }
// }

closeModal.onclick = function () {
    hideModal();
}

let closeModalContainer = document.querySelectorAll('.closeModalContainer');
for (let i = 0; i < closeModalContainer.length; i++) {
    console.log('closed')
    closeModalContainer[i].onclick = function () {
        this.parentElement.style.display = 'none';
    }
}