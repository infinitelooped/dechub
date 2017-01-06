document.getElementById('rot-mode').addEventListener('change', fireRot);
document.getElementById('rot-input').addEventListener('input', fireRot);

function fireRot() {
	var modeElement = document.getElementById('rot-mode');
	var inputElement = document.getElementById('rot-input');
	var outputElement = document.getElementById('rot-output');

	outputElement.innerHTML = '';

	for (var i = 1; i < 26; i++) {
		//Format: <p id="rot-{i}"><span>ROT-{i}</span>: ...</p>
		outputElement.innerHTML += '<p>ROT-' + i + ': <span id="rot-' + i + '">' + rotN(inputElement.value, i, modeElement.value) + '</span></p>';
		//Format: <button class="btn" data-clipboard-target="#rot-{i}"><img src="icons/copy-icon.png></button>
		outputElement.innerHTML += '<button class="btn clip" data-clipboard-target="#rot-' + i + '"><img class="mini" src="icons/copy-icon.png"></button>';
	}
	$.fn.fullpage.reBuild();
}

function rotN(text, n, mode) {
	var result = '';

	if (mode === 'alphanum+') {
		result = rotN(rotN(text, n, 'alpha'), n, 'num+');
	} else if (mode === 'alphanum-') {
		result = rotN(rotN(text, n, 'alpha'), n, 'num-');
	} else {
		for (var i = 0; i < text.length; i++) {
			var char = text[i];
			var ascii = text.charCodeAt(i);
			if (mode === 'alpha') {
				if (isUpper(char)) {
					result += String.fromCharCode((ascii - 65 + n) % 26 + 65);
				} else if (isLower(char)) {
					result += String.fromCharCode((ascii - 97 + n) % 26 + 97);
				} else {
					result += char;
				}
			} else if (mode === 'num+') {
				if (isDigit(char)) {
					result += String.fromCharCode(((ascii - 48) + (n % 10)) % 10 + 48);
				} else {
					result += char;
				}
			} else if (mode === 'num-') {
				if (isDigit(char)) {
					result += String.fromCharCode(((ascii - 48) - (n % 10) + 10) % 10 + 48);
				} else {
					result += char;
				}
			}
		}
	}
	return result;
}