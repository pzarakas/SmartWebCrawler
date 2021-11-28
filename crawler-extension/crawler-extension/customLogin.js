//variable to store the web crawler's username
var username = "username";

//variable to store the web crawler's password
var password = "password";

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

//StackOverflow code unchanged so far, have to get it to work with the above variables and the function below
function getLoginFields() {
    var inputs = document.getElementsByTagName('input');
    var len = inputs.length;

    while(len--) {
        if(inputs[len].type == 'password') {
            passwordField = inputs[len];
            break;
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
                break;
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
                break;
            }
        }
    }

    //alert(count);

    if(submitButton == "") {
        var buttons = document.getElementsByTagName('button');
        len = buttons.length;

        while(len--) {
            if(buttons[len].type == 'submit') {
                submitButton = buttons[len];
                break;
            }
        }
    }

    passwordField.value = "test";
    usernameField.value = "beest";

    //setTimeout(function() {
    //    submitButton.click();
    //}, 500);

    /*
    var fieldPairs = [];
    var pswd = (function() {
            var inputs = document.getElementsByTagName('input');
            var len = inputs.length;
            //alert(len);
            var ret = [];

            while (len--) {
                if (inputs[len].type === 'password') {
                    //alert("found");
                    ret[ret.length] = inputs[len];
                }
            }
            return ret;
        })();
    var pswdLength = pswd.length;
    //alert(pswdLength);
    var parentForm = function(elem) {
            while (elem.parentNode) {
                if (elem.parentNode.nodeName.toLowerCase() === 'form') {
                    return elem.parentNode;
                }
                elem = elem.parentNode;
            }
        };

    while (pswdLength--) {
        var curPswdField = pswd[pswdLength],
            parentForm = parentForm(curPswdField),
            curField = curPswdField;
        if (parentForm) {
            //alert("testing");
            pair = [curPswdField];
            submit = false;
            user = false;
            var inputs = parentForm.getElementsByTagName('input');
            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i] !== curPswdField && inputs[i].type === 'text' && !user) {
                    user = true;
                    alert("here");
                    pair.unshift(inputs[i]);
                    if (submit) {
                        fieldPairs[fieldPairs.length] = pair;
                        break;
                    }

                } else if (inputs[i] !== curPswdField && inputs[i].type === 'submit' && !submit) {
                    submit = true;
                    pair.push(inputs[i]);
                    if (user) {
                        fieldPairs[fieldPairs.length] = pair;
                        break;
                    }

                }

            }
        }
    }
    if (fieldPairs.length !== 0) {
        usernameField = fieldPairs[0][0];
        passwordField = fieldPairs[0][1];
        submitButton = fieldPairs[0][2];
    }
    */
}

function doLogin() {
    setTimeout(function() {
        submitButton.click();
    }, 500);
}

getLoginFields();

if (usernameField !== "" && passwordField !== "" && submitButton !== "") {
    alert(tab.url);
    doLogin();
}
