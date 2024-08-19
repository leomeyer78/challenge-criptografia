function encryptText(text) {
    return text.replace(/e/, 'enter')
               .replace(/i/, 'imes')
               .replace(/a/, 'ai')
               .replace(/o/, 'ober')
               .replace(/u/, 'ufat');
}

function decryptText(text) {
    return text.replace(/enter/, 'e')
               .replace(/imes/, 'i')
               .replace(/ai/, 'a')
               .replace(/ober/, 'o')
               .replace(/ufat/, 'u');
}

document.getElementById('encryptBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    document.getElementById('outputText').value = encryptText(inputText);
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    document.getElementById('outputText').value = decryptText(inputText);
});

document.getElementById('copyBtn').addEventListener('click', function() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
});
