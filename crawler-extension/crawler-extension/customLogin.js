//variable to store the web crawler's username
var username = "";

//variable to store the web crawler's password
var password = "";

//variable to store name of username field
var usernameField = "";

//variable to store name of password field
var passwordField = "";

//variable to store submit button name
var submitButton = "";

//StackOverflow code unchanged so far, have to get it to work with the above variables and the function below
function getLoginFields() {
    var fieldPairs = [],
        pswd = (function(){
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
                if(elem.parentNode.nodeName.toLowerCase() === 'form') {
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
            var inputs = parentForm.getElementsByTagName('input');
            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i] !== curPswdField && inputs[i].type === 'text') {
                    fieldPairs[fieldPairs.length] = [inputs[i], curPswdField];
                    break;
                }
            }
        }
    }
    return fieldPairs;
}

function doLogin(tabId) {
    document.getElementById(usernameField).value = username;
    document.getElementById(passwordField).value = password;
    setTimeout(function() {
        document.getElementById(submitButton).click();
    }, 500);
}