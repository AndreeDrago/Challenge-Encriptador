function cifrarTexto() {
    // Obtener el texto ingresado por el usuario
    let textoIngresado = document.getElementById("areaTexto").value;
    //Cambia los valores del texto
    let textoCifrado = textoIngresado.replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
    // Mostrar el texto transcrito en otra área
    document.getElementById("nuevoTexto").innerText = textoCifrado;
    document.getElementById("copy").style.display = 'block';
  }

function descifrarTexto() {
    // Obtener el texto ingresado por el usuario
    let textoIngresado = document.getElementById("areaTexto").value;
    //Cambia los valores del texto
    let textoDescifrado = textoIngresado.replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
    // Mostrar el texto transcrito en otra área
    document.getElementById("nuevoTexto").innerText = textoDescifrado;
    document.getElementById("copy").style.display = 'block';
  }

function copiarTexto() {
    // Copiar texto
    let textoIngresado = document.querySelector("p").textContent;
    navigator.clipboard.writeText(textoIngresado);
}

document.getElementById("copy").style.display = 'none';
