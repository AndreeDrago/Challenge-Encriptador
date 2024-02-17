function estadoInicial() {
  document.getElementById("copy").style.display = 'none';
  document.getElementById("nuevoTexto").style.display = 'none';
}

function cambioDeEstado() {
  document.getElementById("nuevoTexto").style.display = 'block';
  document.getElementById("copy").style.display = 'block';
  document.getElementById("buscandoTexto").style.display = 'none';
  if (screen.width<1025){
  let nuevoTexto = document.getElementById('nuevoTexto');
  nuevoTexto.style.height = (nuevoTexto.scrollHeight) + 'px'
  } else {}
}

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
    cambioDeEstado();
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
    cambioDeEstado();
  }

function copiarTexto() {
    // Copiar texto
    navigator.clipboard.writeText(document.getElementById("nuevoTexto").textContent);
}

estadoInicial();