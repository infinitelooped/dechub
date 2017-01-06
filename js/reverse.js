document.getElementById('rev-input').addEventListener('input', fireRev);

function fireRev() {
	var inputElement = document.getElementById('rev-input');
	var outputElement = document.getElementById('rev-output');

	outputElement.value = reverse(inputElement.value);
}

function reverse(text) {
	var result = '';
	for (var i = text.length - 1; i >= 0; i--) {
		result += text[i];
	}
	return result;
}