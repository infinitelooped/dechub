//Used for dealing with numbers
var dec = '0123456789';

//Used for dealing with letters
var alphaLower = 'abcdefghijklmnopqrstuvwxyz';
var alphaUpper = 'ACBDEFGHIJKLMNOPQRSTUVWXYZ';

//Used for dealing with base and base conversions, supports from base-2 up to base-36
var baseLower = dec + alphaLower;
var baseUpper = dec + alphaUpper;

//Check if c is uppercase letter (A-Z)
function isUpper(c) {
	var ord = c.charCodeAt();
	if ((65 <= ord) && (ord <= 90)) {
		return true;
	} else {
		return false;
	}
}

//Check if c is uppercase letter (a-z)
function isLower(c) {
	var ord = c.charCodeAt();
	if ((97 <= ord) && (ord <= 122)) {
		return true;
	} else {
		return false;
	}
}

//Check if c is alphabetic (A-Z and a-z)
function isAlpha(c) {
	if (isUpper(c) || isLower(c)) {
		return true;
	} else {
		return false;
	}
}

//Check if c is decimal number (0-9)
function isDigit(c) {
	var ord = c.charCodeAt();
	if ((48 <= ord) && (ord <= 57)) {
		return true;
	} else {
		return false;
	}
}

//Check if c is natural number (1-9)
function isNatural(c) {
	var ord = c.charCodeAt();
	if ((49 <= ord) && (ord <= 57)) {
		return true;
	} else {
		return false;
	}
}

//Check if c is alphanumeric (A-Z, a-z, and 0-9)
function isAlphaNum(c) {
	if (isAlpha(c) || isDigit(c)) {
		return true;
	} else {
		return false;
	}
}

//Check if c is hexadecimal uppercase letter (A-F)
function isHexUpper(c) {
	var ord = c.charCodeAt();
	if (((65 <= ord) && (ord <= 70))) {
		return true;
	} else {
		return false;
	}
}

//Check if c is hexadecimal lowercase letter (a-f)
function isHexLower(c) {
	var ord = c.charCodeAt();
	if (((97 <= ord) && (ord <= 102))) {
		return true;
	} else {
		return false;
	}
}

//Check if c is hexadecimal letter (A-F and a-f)
function isHexLetter(c) {
	if (isHexUpper(c) || isHexLower(c)) {
		return true;
	} else {
		return false;
	}
}

//Check if c is hexadecimal digit (0-9, A-F, and a-f)
function isHex(c) {
	if (isDigit(c) || isHexLetter(c)) {
		return true;
	} else {
		return false;
	}
}