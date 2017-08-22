var $form = $("<form action='index.html' method='post'></form>");
var $fieldset = $("<fieldset></fieldset>");
var $username_input =  $("<input type='text' id='userName' name='user_name'>");
var $username_confirmation_input =  $("<input type='text' id='userConfirmation' name='user_confirmation'>");
var $button = $("<button type='submit' class='btn btn-default'>Submit, fool.</button>");
var $username_error = ("<span id='username_error' class='error'>Sorry, your username must be 8 characters or more.</span>");
var $username_confirmation_error = ("<span id='username_confirmation_error' class='error'>Sorry, your usernames don't match.</span>");
    
$("body").append($form);
$form.append($fieldset);
$fieldset.append($username_input);
$fieldset.append($username_error);
$fieldset.append($username_confirmation_input);
$fieldset.append($username_confirmation_error);
$fieldset.append($button);

$("form span").hide();

function isUsernameValid() {
    return $username_input.val().length > 8;
}

function doUsernamesMatch() {
    return $username_input.val() === $username_confirmation_input.val();
}

function usernameCheck() {
    if (isUsernameValid()){
        $("#username_error").hide();
    } else {
        $("#username_error").show();
    }
}

function confirmUsernameCheck() {
    if(doUsernamesMatch()){
        $("#username_confirmation_error").hide();
    } else {
        $("#username_confirmation_error").show();
    }
}

$username_input.focus(usernameCheck).keyup(usernameCheck).keyup(confirmUsernameCheck);
$username_confirmation_input.focus(confirmUsernameCheck).keyup(confirmUsernameCheck);




         
