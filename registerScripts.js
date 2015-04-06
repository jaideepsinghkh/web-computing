//Validate registration input.
function validate() {
	
	//Declare validation values.
	var valid1 = false;
	var valid2 = false;
	var valid3 = false;
	var valid4 = false;
	var valid5 = false;
	
	//Assign values to outcome of other validation functions.
	valid1 = checkName();
	valid2 = checkAddress();
	valid3 = checkEmail();
	valid4 = checkGender();
	valid5 = checkPassword();
	
	//Cancel submission by returning 'false' if any validation functions returned false. Otherwise, allow submission by returning 'true'.
	if (valid1 == false || valid2 == false || valid3 == false || valid4 == false || valid5 == false){
		return false;
	}
		
	return true;
}

//Check whether or not a surname has been submitted. If not, display an error.
function checkName() {
	if (form1.surname.value == "") {
		document.getElementById("surnameMissing").style.visibility = "visible";
		document.getElementById("surname").focus();
		return false;
	}
	return true;
}

//Hide the surname error if one is entered.
function dismissSurnameWarning() {
	document.getElementById("surnameMissing").style.visibility = "hidden";
}

//Check whether or not an address has been submitted. If not, display an error.
function checkAddress() {
	if (form1.address.value == "") {
		document.getElementById("addressMissing").style.visibility = "visible";
		document.getElementById("address").focus();
		return false;
	}
	return true;
}

//Hide the address error if one is entered.
function dismissAddressWarning() {
	document.getElementById("addressMissing").style.visibility = "hidden";
}

//Check whether or not a valid email address with the correct syntax has been submitted. If not, display an error.
function checkEmail(){
	if (!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(form1.email.value))) {
		document.getElementById("invalidEmail").style.visibility = "visible";
		document.getElementById("email").focus();
		return false;
	}
	return true
}

//Hide the email error if a valid one is entered.
function dismissEmailWarning() {
	document.getElementById("invalidEmail").style.visibility = "hidden";
}

//Check if either gender has been selected. Otherwise, display an error.
function checkGender(){
	if (document.getElementById('sexMale').checked) {
		return true
	} else if(document.getElementById('sexFemale').checked) {
		return true
	} else {
		window.alert("Please select a gender.");
		return false
	}
}

//Check to make sure both password fields are filled in and match. Otherwise, display an appropriate error.
function checkPassword() {
	if (form1.password.value == "") {
		window.alert("Please enter a password.");
		return false;
	} else if (form1.passwordConfirm.value == "") {
		window.alert("Please confirm your password.");
		return false;
	} else if (form1.password.value != form1.passwordConfirm.value) {
		window.alert("Passwords do not match.");
		return false;
	} else {
		return true;
	}
}
