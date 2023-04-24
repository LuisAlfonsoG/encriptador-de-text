
/**
 * La letra "e" es convertida para "enter"
 * La letra "i" es convertida para "imes"
 * La letra "a" es convertida para "ai"
 * La letra "o" es convertida para "ober"
 * La letra "u" es convertida para "ufat"
 */

const input = document.getElementById("input");
const botonEncriptador = document.getElementById("boton-encriptador");
const botonDesencriptador = document.getElementById("boton-desencriptador");
const output = document.getElementById("output");
const copy = document.getElementById("boton-copiar");
const contenidoDefault = document.getElementById("contenido-default");

const map = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat"
};

function encriptar(texto){
  let msjEncriptado = "";
  
  let keys = Object.keys(map);
  for(let s of texto){
    if(keys.includes(s)){
      msjEncriptado += map[s];
    } else {
      msjEncriptado += s;
    }
  }
  
  return msjEncriptado;
}

function desencriptar(texto){
  let msjDesencriptado = texto;

  let keys = Object.keys(map);
  for(let key of keys){
    msjDesencriptado = msjDesencriptado.replaceAll(map[key], key);
  }

  return msjDesencriptado;
}

function copiarTexto(){
  navigator.clipboard
    .writeText(output.innerText)
      .then(() => {});
}

botonEncriptador.onclick = () => {
  let text = input.value;
  output.innerText = encriptar(text);
  contenidoDefault.classList.add("hide");
  copy.classList.remove("hide");
}

botonDesencriptador.onclick = () => {
  let text = input.value;
  output.innerText = desencriptar(text);
  contenidoDefault.classList.add("hide");
  copy.classList.remove("hide");
}

copy.onclick = copiarTexto;