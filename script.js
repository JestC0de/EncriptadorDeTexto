function validarTexto(mensaje) {
    const regex = /^[a-z\s]+$/;
    return regex.test(mensaje);
}

function mostrarAdvertencia(mostrar) {
    const warningMessage = document.getElementById('warning-message');
    warningMessage.style.display = mostrar ? 'block' : 'none';
}

function procesarTexto() {
    let inputText = document.getElementById('input-text').value;

    if (!validarTexto(inputText)) {
        mostrarAdvertencia(true); 
        return;
    }

    mostrarAdvertencia(false); 

    let outputText = "";

    if (document.getElementById('encriptar-radio').checked) {
        outputText = encriptarTexto(inputText);
    } else {
        outputText = desencriptarTexto(inputText);
    }

    document.getElementById('output-text').textContent = outputText;
}

function copiarTexto() {
    let outputText = document.getElementById('output-text');
    let textArea = document.createElement('textarea');
    textArea.value = outputText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}

function encriptarTexto(mensaje) {
    return mensaje.replace(/e/g, "enter")
                  .replace(/i/g, "imes")
                  .replace(/a/g, "ai")
                  .replace(/o/g, "ober")
                  .replace(/u/g, "ufat");
}

function desencriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "e" && texto.slice(i, i + 5) === "enter") {
            textoFinal += "e";
            i += 4; 
        } else if (texto[i] === "i" && texto.slice(i, i + 4) === "imes") {
            textoFinal += "i";
            i += 3; 
        } else if (texto[i] === "a" && texto.slice(i, i + 2) === "ai") {
            textoFinal += "a";
            i += 1; 
        } else if (texto[i] === "o" && texto.slice(i, i + 4) === "ober") {
            textoFinal += "o";
            i += 3; 
        } else if (texto[i] === "u" && texto.slice(i, i + 4) === "ufat") {
            textoFinal += "u";
            i += 3; 
        } else {
            textoFinal += texto[i];
        }
    }

    return textoFinal;
}


