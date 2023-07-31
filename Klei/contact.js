let styleElement = document.getElementById('customStyles');
let nameError = document.getElementById("error-name");
let lnameError = document.getElementById("lastname-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");

let flag = 1;

function validateForm() {
  let name = document.forms["myform"]["fname"].value;
  let surname = document.forms["myform"]["lname"].value;
  let email = document.forms["myform"]["email"].value;
  let message = document.forms["myform"]["message-area"].value;

  if (name == "") {
    nameError.style.color = "red";
   nameError.innerHTML = "Input name";
   flag = 0;
  } else if (!/^[A-Za-z]{1,20}$/.test(name)) {
    nameError.style.color = "red";
    nameError.innerHTML = "Name should be smaller than 20 characters";
    flag = 0;

  }
  else{
    nameError.innerHTML = "";
  }

  if (surname == ""){
    lnameError.style.color = "red";
    lnameError.innerHTML = "Input last name";
    flag = 0;

  }else if (!/^[A-Za-z]{1,20}$/.test(surname)) {
    lnameError.style.color = "red";
    lnameError.innerHTML = "Last name should be smaller than 20 characters";
    flag = 0;
  }
  else{
    lnameError.innerHTML = "";
  }

  if (email == ""){
    emailError.style.color = "red";
    emailError.innerHTML = "Input your email";
    flag = 0;
  }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.style.color = "red";
    emailError.innerHTML = "Please check your email format";
    flag = 0;
  }
  else{
    emailError.innerHTML = "";
  }


  if (message == ""){
    messageError.style.color = "red";
    messageError.innerHTML = "Please write a short message with your questions";
    flag = 0;
  }
  else if (!/^[A-Za-z]{1,200}$/.test(message)){
    messageError.style.color = "red";
    messageError.innerHTML = "Your message should not be longer than 200 charcters"
    flag = 0; 
  }
  else{
    messageError.innerHTML = "";
  }


  if(flag == 0){
    return false;
  }
}