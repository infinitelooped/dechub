document.getElementById('atbash-mode').addEventListener('change', fireAtbash);
document.getElementById('atbash-input').addEventListener('input', fireAtbash);

function fireAtbash() {
	var modeElement = document.getElementById('atbash-mode');
	var inputElement = document.getElementById('atbash-input');
	var outputElement = document.getElementById('atbash-output');

	outputElement.value = atbash(inputElement.value, modeElement.value);
}

function atbash(text, mode) {
	var result = '';

	if (mode === 'alphanum09') {
		result = atbash(atbash(text, 'alpha'), 'num09');
	} else if (mode === 'alphanum19') {
		result = atbash(atbash(text, 'alpha'), 'num19');
	} else {
		for (var i = 0; i < text.length; i++) {
			var char = text[i];
			if (mode === 'alpha') {
				if (isUpper(char)) {
					result += alphaUpper[25 - alphaUpper.indexOf(char)];
				} else if (isLower(char)) {
					result += alphaLower[25 - alphaLower.indexOf(char)];
				} else {
					result += char;
				}
			} else if (mode === 'num09') {
				if (isDigit(char)) {
					result += dec[9 - dec.indexOf(char)];
				} else {
					result += char;
				}
			} else if (mode === 'num19') {
				if (isNatural(char)) {
					result += dec[10 - dec.indexOf(char)];
				} else {
					result += char;
				}
			} else if (mode === 'hex') {
				if (isHex(char)) {
					if (isHexUpper(char)) {
						result += baseUpper[15 - baseUpper.indexOf(char)];
					} else {
						result += baseLower[15 - baseLower.indexOf(char)];
					}
				} else {
					result += char;
				}
			}
		}
	}
	return result; 
}