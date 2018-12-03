import { getResults } from '.././services/get.js';
import { setModal } from '../modal.js';

// checks if user in loggedIn and display exam results list
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

// create a new user with email and password
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


// checks if user exists when he tries to login
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


// signup and login with google authentication
googleAuth.onclick = function () {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
}


// redirect user is login with google was succesful
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


// checks status of user
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        authenticationControl.innerHTML = `<div>
            <ul class="flex align-center">
                <li>${user.displayName}</li>
                <li><span id="logout">Logout</span></li>
            </ul>
        </div>`;
        console.log('Is signed in');
        console.log(user.displayName);

        authentication.style.display = 'none';

        logout.onclick = function () {
            firebase.auth().signOut().then(function () {
                setModal('Logout successful');
                // console.log('Sign-out successful');
            }).catch(function (error) {
                // An error happened.
            });
        }

    } else {
        authenticationControl.innerHTML = '<div id="loginButton">Login</div>';

        loginButton.onclick = function () {
            authentication.style.display = 'block';
        }
    }
});