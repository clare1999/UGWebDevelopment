let username = document.getElementById('username');
let email = document.getElementById('email');
let birthday = document.getElementById('birthday');
let password1 = document.getElementById('password1');
let password2 = document.getElementById('password2');
let submit = document.getElementById('submit');
let usernameTips = document.getElementById('usernameTips');
let password1Tips = document.getElementById('password1Tips');

const showError = (element, errorMessage) => {
  let inputContainer = element.parentElement;
  let error = inputContainer.querySelector('small');
  inputContainer.className = "input-container error";
  error.innerHTML = errorMessage;
}


const showSuccess = (element) => {
  let inputContainer = element.parentElement;
  let error = inputContainer.querySelector('small');
  inputContainer.className = "input-container success";
  error.innerHTML = "Error Message";
}

const checkRequired = (inputElement) => {
  return len(inputElement.innerHTML) == 0;
}

const handleResult = (inputElement, wrongMessage) => {
  if (wrongMessage.length == 0) {
    showSuccess(inputElement);
    return true;
  }else{
    showError(inputElement, wrongMessage.join('<br>'));
    return false;
  }
}

const checkUserName = (inputElement) => {
  const re = /^[A-Za-z][A-Za-z0-9]*/;
  let wrongMessage = new Array();
  if (!re.test(inputElement.value)) {
    wrongMessage.push("The username should starts with an alphebat.");
  }
  if (inputElement.value.length<6){
    wrongMessage.push("The username should have at least 6 characters.");
  }
  handleResult(inputElement, wrongMessage);
}

const checkEmail = (emailElt) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(emailElt.value.trim())) {
    showSuccess(emailElt);
  } else {
    showError(emailElt, 'Email is not valid');
  }
}

const checkBirthday = (birthdayElt) => {
  if (birthdayElt.value.length > 0){
    showSuccess(birthdayElt);
  }else{
    showError(birthdayElt, "Please select your birthday.");
  }
}

const checkPassword = (passwordElement) => {
  const re1 = /[A-Za-z0-9]*[0-9][A-Za-z0-9]*/;
  const re2 = /[A-Za-z0-9]*[A-Za-z][A-Za-z0-9]*/;
  let wrongMessage = new Array();
  if (passwordElement.value.length < 6){
    wrongMessage.push("Minimum 6 characters required");
  }
  // at least 1 number
  if (!re1.test(passwordElement.value)){
    wrongMessage.push("Password should have at least 1 number");
  }
  // at least 1 character
  if (!re2.test(passwordElement.value)){
    wrongMessage.push("Password should have at least 1 alphebat");
  }
  // TODO: at least 1 symbol
  handleResult(passwordElement, wrongMessage);
}

const checkPwdConsistency = (pwd1, pwd2) => {
  if (pwd2.value.length == 0){
    showError(pwd2, "Please confirm your password");
  }else if (pwd1.value == pwd2.value){
    showSuccess(pwd2);
  }else{
    showError(pwd2, "Passwords mismatch");
  }
}

const checkAll = () => {
  checkUserName(username);
  checkPassword(password1);
  checkEmail(email);
  checkBirthday(birthday);
  checkPwdConsistency(password1, password2);
}


const bubbleUp = (e) => {
  let sticker = e.target.parentElement.parentElement.querySelector('ol');
  sticker.className = "hidden-stickers display";
  sticker.style.top = e.clientY+'px';
  sticker.style.left = e.clientX+'px';
}

const bubbleDown = (e) => {
  let sticker = e.target.parentElement.parentElement.querySelector('ol');
  sticker.className = "hidden-stickers";
}

submit.addEventListener('click', checkAll);
usernameTips.addEventListener('mouseover', bubbleUp);
usernameTips.addEventListener('mouseout', bubbleDown);
password1Tips.addEventListener('mouseover', bubbleUp);
password1Tips.addEventListener('mouseout', bubbleDown);


