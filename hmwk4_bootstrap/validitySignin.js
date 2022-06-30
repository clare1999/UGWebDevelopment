let submit = document.getElementById('submit');
let password = document.getElementById('floatingPassword');
let username = document.getElementById('floatingInput');

submit.addEventListener('click', checkLoginInfo);
username.addEventListener('click', checkUserName);
username.addEventListener('keyup', checkUserName);
password.addEventListener('click', checkPassword);
password.addEventListener('keyup', checkPassword);
