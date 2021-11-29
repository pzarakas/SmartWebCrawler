//variable to store the web crawler's username
let username = "username";

//variable to store the web crawler's password
let password = "UsGY4U6u?edAq=+aGzAWn7!Ts#2k7CAYzhX!n%8@";

//variable to store the web crawler's email
let email = "address@gmail.com"

//variable to store blacklist of prototypes
let userblacklist = ["search"];

//variable to store blacklist of submit types
let submitblacklist = ["Search"]

let loginValues = ["Login", "log in"];

//variable to store name of username field
let usernameField = "";

//variable to store name of password field
let passwordField = "";

//variable to store submit button name
let submitButton = "";

let emailField = "";

let last = "";

let all = 0;

if (window.localStorage.getItem('loginAttempt') != null) {
    if(isLoginStillPresent()) {
        console.log('Bad login because form is still present');
        badLogin();
    } else {
        console.log('Good login, no form present');
        successfulLogin();
    }
}

function getLoginFields() {
    let inputs = document.getElementsByTagName('input');
    let len = inputs.length;

    while(len--) {
        if(inputs[len].type === 'password') {
            passwordField = inputs[len];
        }
    }

    passwordField.value = "test";

    inputs = document.getElementsByTagName('input');
    len = inputs.length;

    while(len--) {
        if(inputs[len].type === 'text') {
            if(!(userblacklist.includes(inputs[len].placeholder)) ) {
                usernameField = inputs[len];
            }
        }
    }

    len = inputs.length;
    if(submitButton === "") {
        while(len--) {
            if(inputs[len].type === 'email') {
                //alert("here");
                emailField = inputs[len];
            }
        }
    }

    inputs = document.getElementsByTagName('input');
    len = inputs.length;

    while(len--) {
        if(inputs[len].type === 'submit') {
            //count++;
            if(!submitblacklist.includes(inputs[len].value)) {
                submitButton = inputs[len];
            }
        }
    }

    if(submitButton === "") {
        let buttons = document.getElementsByTagName('button');
        len = buttons.length;

        while(len--) {
            if(buttons[len].type === "submit" && (buttons[len].value === "" || loginValues.includes(buttons[len].value))) {
                submitButton = buttons[len];
                if(loginValues.includes(buttons[len].value)) {
                    break;
                }
            }
        }
    }

    passwordField.value = password;

    if(usernameField !== "") {
        usernameField.value = username;
    } else if (emailField !== "") {
        emailField.value = email;
    }
}

function doLogin() {
    last = window.location.toString();
    setTimeout(function() {
        submitButton.click();
    }, 500);
}

getLoginFields();

if ((usernameField !== "" || emailField !== "") && passwordField !== "" && submitButton !== "") {
    //Get total number of elements
    all = document.getElementsByTagName("*").length;
    doLogin();
    //After the login is executed, wait a second
    setTimeout(function() {
        //Check to see if the number of elements increased
        //i.e the webpage displays a new message saying the login failed
        //If the elements changed, bad login
        if(all !== document.getElementsByTagName("*").length) {
            badLogin();
        } else {
            //Otherwise note a login attempt before page reload
            window.localStorage.setItem('loginAttempt','true');
        }
    }, 1000);
}

//Function to test whether login fields were still present after a reload of the page
//For webpages that reload on a failed login
function isLoginStillPresent() {
    usernameField = "";
    emailField = "";
    passwordField = "";
    submitButton = "";
    getLoginFields();
    return (usernameField !== "" || emailField !== "") && passwordField !== "" && submitButton !== "";
}

//Placeholder method for handling successful login (password works with site)
function successfulLogin() {
    //Alert is for demonstration purposes, other methods of login can be implemented as necessary
    window.alert('Login successful??');
    window.localStorage.removeItem('loginAttempt');
}

//Placeholder method for handling failed login (password doesn't work with site)
function badLogin() {
    //Alert is for demonstration purposes, other methods of login can be implemented as necessary
    window.alert("Login failed!!, site must be registered for");
    window.localStorage.removeItem('loginAttempt');
}
