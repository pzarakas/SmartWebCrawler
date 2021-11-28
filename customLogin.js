//variable to store the web crawler's username
var username = "username";

//variable to store the web crawler's password
var password = "password";

var email = "address@gmail.com"

//variable to store blacklist of prototypes
var userblacklist = ["search"];

//variable to store blacklist of submit types
var submitblacklist = ["Search"]

//variable to store name of username field
var usernameField = "";

//variable to store name of password field
var passwordField = "";

//variable to store submit button name
var submitButton = "";

var emailField = "";

var last = "";

if (window.localStorage.getItem('loginAttempt') != null) {
    if(isLoginStillPresent()) {
        window.localStorage.removeItem('loginAttempt');
        window.alert("Login failed!!");
    } else {
        window.alert('Login successful??');
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

    //alert(count);

    if(submitButton == "") {
        var buttons = document.getElementsByTagName('button');
        len = buttons.length;
        var count2 = 0;

        //alert(len);

        while(len--) {
            //alert(buttons[len].value);
            if(buttons[len].type == 'submit' && (buttons[len].value == "" || buttons[len].value == "Login")) {
                //alert("found");
                //alert(buttons[len].value);
                count2++;
                submitButton = buttons[len];

                if(buttons[len].value == "Login") {
                    break;
                }
            }
        }

        //alert(count2);
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
        //if(last == )
    }, 500);

}

//alert(document.documentElement.innerHTML.toString().includes("Incorrect"));

getLoginFields();

//alert(window.location.toString());

if ((usernameField !== "" || emailField !== "") && passwordField !== "" && submitButton !== "") {
    doLogin();
    window.localStorage.setItem('loginAttempt','true');
    setTimeout(function() {
        //if (last == window.location.toString()) {

        //}
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
