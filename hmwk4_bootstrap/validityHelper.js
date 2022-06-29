const resetValidStatus = (DOMTokenList) => {
	DOMTokenList.remove('is-valid');
	DOMTokenList.remove('is-invalid');
}

const checkRequiredInner = (elt) => {
	resetValidStatus(elt.classList);
	if (elt.value.length == 0){
		elt.classList.add('is-invalid');
		return false;
	}else{
		elt.classList.add('is-valid');
		return true;
	}
}

const checkRequired = (event) => {
	event.preventDefault();
	checkRequiredInner(event.target);
}


const handleResult = (inputElement, wrongMessage) => {
	resetValidStatus(inputElement.classList);
	if (wrongMessage.length == 0) {
		inputElement.classList.add('is-valid');
		return true;
	}else{
		// .is-invalid
		let invalidFeedback = inputElement.parentNode.getElementsByClassName('invalid-feedback')[0];
		invalidFeedback.innerHTML = wrongMessage.join('<br>');
		inputElement.classList.add('is-invalid');
		return false;
	}
}

const checkUserNameInner = (elt) => {
	const re = /^[A-Za-z][A-Za-z0-9]*/;
	let wrongMessage = new Array();
	if (!re.test(elt.value)) {
		wrongMessage.push("The username starts with an alphebat.");
	}
	if (elt.value.length<6){
		wrongMessage.push("The username should have at least 6 characters.");
	}
	return handleResult(elt, wrongMessage);
}

const checkUserName = (event) => {
	event.preventDefault();
	checkUserNameInner(event.target);
}

const checkEmailInner = (elt) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	resetValidStatus(elt.classList);
	if (re.test(elt.value.trim())) {
		elt.classList.add('is-valid');
		return true;
	} else {
		elt.classList.add('is-invalid');
		return false;
	}
}

const checkEmail = (event) => {
	event.preventDefault();
	checkEmailInner(event.target);
}


const checkPasswordInner = (passwordElement) => {
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
	return handleResult(passwordElement, wrongMessage);
}

const checkPassword = (event) => {
	event.preventDefault();
	checkPasswordInner(event.target);
}


const checkPwdConsistency = (event) => {
	event.preventDefault();
	let pwd2 = document.getElementById('validationPassword2');
	let pwd1 = document.getElementById('validationPassword1');
	let invalidFeedback = pwd2.parentNode.getElementsByClassName('invalid-feedback')[0];
	resetValidStatus(pwd2.classList);
	if (pwd2.value.length == 0){
		invalidFeedback.innerHTML = "Please confirm your passwords."
		pwd2.classList.add('is-invalid');
		return false;
	}else if (pwd1.value == pwd2.value){
		pwd2.classList.add('is-valid');
		return true;
	}else{
		invalidFeedback.innerHTML = "Passwords mismatched."
		pwd2.classList.add('is-invalid');
		return false;
	}
}

const checkTermInner = (elt) => {
	resetValidStatus(elt.classList);
	if (elt.checked){
		elt.classList.add('is-valid');
		return true;
	}else{
		elt.classList.add('is-invalid');
		return false;
	}

}


const checkAll = (event) => {
	// event.preventDefault();
	let flag = true;
	flag = flag & checkRequiredInner(firstname);
	flag = flag & checkRequiredInner(lastname);
	flag = flag & checkRequiredInner(birthday);
	flag = flag & checkRequiredInner(address);
	flag = flag & checkRequiredInner(city);
	flag = flag & checkRequiredInner(state);
	flag = flag & checkRequiredInner(zip);
	flag = flag & checkRequiredInner(birthday);
	flag = flag & checkUserNameInner(username);
	flag = flag & checkEmailInner(email);
	flag = flag & checkPasswordInner(password1);
	flag = flag & checkPwdConsistency(event);
	flag = flag & checkTermInner(term);
	if (flag){
		window.alert("Successfully Signed Up!");
		window.location = 'index.html';
	}
}

const cheat = () => {
	firstname.value = 'Clare';
	lastname.value = 'Xu';	
	username.value = 'clare123';
	email.value = "chuchu@gmail.com";
	city.value = "Shanghai";
	state.value = 'Shanghai';
	zip.value = '200123';
	birthday.value = '2000-01-01';
	address.value = "Road 123 Room 456";
	password1.value = '1234567q';
	password2.value = '1234567q';
	term.checked = true;
}

