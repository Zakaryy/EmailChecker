$(document).ready(function () {
  //Variables
  let email = $("#inputEmail");
  let password = $("#inputPassword");

  let emailMessage = "";
  let passwordMessage = "";

  const button = $(".btn");
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  //Password verification
  $(".btn").click(function () {
    if (password.val().length != 0) {
      passwordMessage =
        "I don't know if it's a safe password, but at least you have something !";
      $(".btn").after(passwordMessage);
      //console.log(passwordMessage);
    } else {
      passwordMessage = "the password is missing, please retry.";
      $(".btn").after(passwordMessage);
      //console.log(passwordMessage);
    }
  });

  //Email verification
  $(".btn").click(function () {
    if (email.val().match(emailRegex)) {
      emailMessage =
        "Thats's a beautiful mail, probably as beautiful as you are";
      $(".inputEmail").append("Some appended text.");
      $(".btn").after(emailMessage);
      //console.log(emailMessage);
    } else {
      emailMessage = "\nThere is something wrong with your mail address and ";
      $(".btn").after(emailMessage);
      //console.log(emailMessage);
    }
  });
});
