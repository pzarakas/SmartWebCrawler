//variable to store the web crawler's username
var username = "username";

//variable to store the web crawler's password
var password = "password";

//variable to store the web crawler's email
var email = "address@gmail.com"

//variable to store blacklist of prototypes
var userblacklist = ["search"];

//variable to store blacklist of submit types
var submitblacklist = ["Search"]

var loginValues = ["Login", "log in"];

//variable to store name of username field
var usernameField = "";

//variable to store name of password field
var passwordField = "";

//variable to store submit button name
var submitButton = "";

var emailField = "";

var last = "";

let all = 0;

if (window.localStorage.getItem('loginAttempt') != null) {
    if(isLoginStillPresent()) {
        console.log('Bad login because form is still present');
        badLogin();
    } else {
        console.log('Good login, no form present');
        successfulLogin()
    }
}

function getLoginFields() {
    var inputs = document.getElementsByTagName('input');
    var len = inputs.length;

    while(len--) {
        if(inputs[len].type == 'password') {
            passwordField = inputs[len];
        }
    }

    passwordField.value = "test";

    inputs = document.getElementsByTagName('input');
    len = inputs.length;

    while(len--) {
        if(inputs[len].type == 'text') {
            if(!(userblacklist.includes(inputs[len].placeholder)) ) {
                //alert(inputs[len].placeholder);
                usernameField = inputs[len];
            }
        }
    }

    len = inputs.length;
    if(submitButton == "") {
        while(len--) {
            if(inputs[len].type == 'email') {
                //alert("here");
                emailField = inputs[len];
            }
        }
    }

    inputs = document.getElementsByTagName('input');
    len = inputs.length;

    while(len--) {
        if(inputs[len].type == 'submit') {
            //count++;
            if(!submitblacklist.includes(inputs[len].value)) {
                submitButton = inputs[len];
            }
        }
    }

    if(submitButton == "") {
        var buttons = document.getElementsByTagName('button');
        len = buttons.length;
        //var count2 = 0;

        while(len--) {
            if(buttons[len].type == "submit" && (buttons[len].value == "" || loginValues.includes(buttons[len].value))) {
                //count2++;
                submitButton = buttons[len];

                if(loginValues.includes(buttons[len].value)) {
                    break;
                }
            }
        }
    }

    passwordField.value = password;

    if(usernameField != "") {
        usernameField.value = username;
    } else if (emailField != "") {
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
    all = document.getElementsByTagName("*").length;
    doLogin();
    setTimeout(function() {
        if(all !== document.getElementsByTagName("*").length) {
            badLogin();
        } else {
            window.localStorage.setItem('loginAttempt','true');
        }
    }, 1000);
}

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
    window.alert("Login failed!!");
    window.localStorage.removeItem('loginAttempt');
}
