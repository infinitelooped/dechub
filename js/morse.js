document.getElementById('morse-mode').addEventListener('change', fireMorse);
document.getElementById('morse-input').addEventListener('input', fireMorse);

function fireMorse() {
	var modeElement = document.getElementById('morse-mode');
	var inputElement = document.getElementById('morse-input');
	var outputElement = document.getElementById('morse-output');
	
	outputElement.value = morse(inputElement.value, modeElement.value);
}

function morse(text, mode) {
	var result = '';

	if (mode === 'text2morse') {
		result = toMorse(text);
	} else if (mode === 'morse2text') {
		result = toText(text);
	} else if (mode === 'text2text-invert') {
		result = toText(morseInvert(toMorse(text)));
	} else if (mode === 'text2text-reverse') {
		result = toText(reverse(toMorse(text)));
	} else if (mode === 'text2text-invert+reverse') {
		result = toText(reverse(morseInvert(toMorse(text))));
	}
	return result;
}

var morseAlpha = ['.-', '-...', '-.-.', '-..', '.', '..-.',
				  '--.', '....', '..', '.---', '-.-', '.-..',
				  '--', '-.', '---', '.--.', '--.-', '.-.',
				  '...', '-', '..-', '...-', '.--', '-..-',
				  '-.--', '--..'];
var morseNum = ['-----', '.----', '..---', '...--', '....-',
			    '.....', '-....', '--...', '---..', '----.'];

function toMorse(text) {
	var result = '';

	if (text !== '') {
		for (var i = 0; i < text.length; i++) {
			var char = text[i];

			if (char === ' ') {
				result += '/';
			} else {
				var pos = -1;
				if (isUpper(char)) {
					pos = alphaUpper.indexOf(char);
					result += morseAlpha[pos];
				} else if (isLower(char)) {
					pos = alphaLower.indexOf(char);
					result += morseAlpha[pos];
				} else if (isDigit(char)) {
					pos = dec.indexOf(char);
					result += morseNum[pos];
				} else {
					result += '#'
				}
			}
			
			if (i < text.length - 1) {
				result += ' ';
			}
		}
	}
	return result;
}

function toText(code) {
	
	var result = '';

	if (code !== '') {
		var chars = code.split(' ');
		for (var i = 0; i < chars.length; i++) {
			var char = chars[i];

			if (char === '/') {
				result += ' ';
			} else if (char === '#') {
				result += '#';
			} else {
				var pos = -1;
				if (char.length === 5) {
					pos = morseNum.indexOf(char);
					result += dec[pos];
				} else {
					pos = morseAlpha.indexOf(char);
					if (pos !== -1) {
						result += alphaUpper[pos];
					} else {
						result += '#';
					}
				}	
			}
		}
	}
	return result;
}

function morseInvert(code) {
	var result = '';
	for (var i = 0; i < code.length; ++i) {
		var char = code[i];

		if (char === '-') {
			result += '.';
		} else if (char === '.') {
			result += '-';
		} else {
			result += char;
		}
	}
	return result;
}