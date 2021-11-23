//variable to store the web crawler's username
var username = "username";

//variable to store the web crawler's password
var password = "password";

//variable to store name of username field
var usernameField = "";

//variable to store name of password field
var passwordField = "";

//variable to store submit button name
var submitButton = "commit";

//StackOverflow code unchanged so far, have to get it to work with the above variables and the function below
function getLoginFields() {
    var fieldPairs = [],
        pswd = (function() {
            var inputs = document.getElementsByTagName('input'),
                len = inputs.length,
                ret = [];
            while (len--) {
                if (inputs[len].type === 'password') {
                    ret[ret.length] = inputs[len];
                }
            }
            return ret;
        })(),
        pswdLength = pswd.length,
        parentForm = function(elem) {
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
            pair = [curPswdField];
            submit = false;
            user = false;
            var inputs = parentForm.getElementsByTagName('input');
            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i] !== curPswdField && inputs[i].type === 'text' && !user) {
                    user = true;
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
}

function doLogin() {
    usernameField.value = username;
    passwordField.value = password;
    setTimeout(function() {
        submitButton.click();
    }, 500);
}

getLoginFields();

if (usernameField !== "" && passwordField !== "") {
    doLogin();
}