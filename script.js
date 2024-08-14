function criptografarTexto(texto) {
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

function descriptografarTexto(texto) {
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}

document.getElementById('executar').addEventListener('click', () => {
    const texto = document.getElementById('texto').value;
    const acao = document.getElementById('acao').value;
    let resultado = '';

    if (acao === 'criptografar') {
        resultado = criptografarTexto(texto);
    } else if (acao === 'descriptografar') {
        resultado = descriptografarTexto(texto);
    }

    document.getElementById('resultado').value = resultado;
});

document.getElementById('copiar').addEventListener('click', () => {
    const resultado = document.getElementById('resultado');
    resultado.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
});
