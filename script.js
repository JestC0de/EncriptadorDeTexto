function validarTexto(mensaje) {
    // Expresión regular para validar si solo contiene letras minúsculas y espacios
    const regex = /^[a-z\s]+$/;
    return regex.test(mensaje);
}

function mostrarAdvertencia(mostrar) {
    // Mostrar u ocultar el mensaje de advertencia
    const warningMessage = document.getElementById('warning-message');
    warningMessage.style.display = mostrar ? 'block' : 'none';
}

function procesarTexto() {
    let inputText = document.getElementById('input-text').value;

    if (!validarTexto(inputText)) {
        mostrarAdvertencia(true); // Mostrar mensaje de advertencia
        return;
    }

    mostrarAdvertencia(false); // Ocultar mensaje de advertencia

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
        // Verificar si encontramos una letra que puede ser desencriptada
        if (texto[i] === "e" && texto.slice(i, i + 5) === "enter") {
            textoFinal += "e";
            i += 4; // Saltar las letras encriptadas
        } else if (texto[i] === "i" && texto.slice(i, i + 4) === "imes") {
            textoFinal += "i";
            i += 3; // Saltar las letras encriptadas
        } else if (texto[i] === "a" && texto.slice(i, i + 2) === "ai") {
            textoFinal += "a";
            i += 1; // Saltar la letra encriptada
        } else if (texto[i] === "o" && texto.slice(i, i + 4) === "ober") {
            textoFinal += "o";
            i += 3; // Saltar las letras encriptadas
        } else if (texto[i] === "u" && texto.slice(i, i + 4) === "ufat") {
            textoFinal += "u";
            i += 3; // Saltar las letras encriptadas
        } else {
            textoFinal += texto[i];
        }
    }

    return textoFinal;
}


