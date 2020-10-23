
window.onload = function () {

//Variables
let email = document.querySelector("#inputEmail");
let password = document.querySelector("#inputPassword");

let emailMessage = '';
let passwordMessage = '';

const button = document.querySelector(".btn");
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/





//Email verification
button.addEventListener("click", function()
{ 
    if (emailRegex.test(email.value.toString()))
    {
        emailMessage = "Thats's a beautiful mail, probably as beautiful as you are";
        console.log(emailMessage);
    } 

    else 
    {
        emailMessage = "There is something wrong with your mail address";
        console.log(emailMessage);
    }
    
});


//Password verification
button.addEventListener("click", function()
{ 
    if ((password.value.toString()).length != 0)

    {
        passwordMessage = "I don't know if it's a safe password, but at least you have something !";
        console.log(passwordMessage);
        addElement()
    } 

    else 
    {
        passwordMessage = "the password is missing, please retry";
        console.log(passwordMessage);
    }
    
});

};

