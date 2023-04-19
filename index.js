
/**
 * La letra "e" es convertida para "enter"
 * La letra "i" es convertida para "imes"
 * La letra "a" es convertida para "ai"
 * La letra "o" es convertida para "ober"
 * La letra "u" es convertida para "ufat"
 */

const input = document.getElementById("input");
const botonEncriptador = document.getElementById("boton-encriptador");
const output = document.getElementById("output");

const map = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat"
};

function encriptar(texto){
  let msgEncriptado = "";

  let keys = Object.keys(map);
  for(let s of texto){
    if(keys.includes(s)){
      msgEncriptado += map[s];
    } else {
      msgEncriptado += s;
    }
  }

  return msgEncriptado;
}

botonEncriptador.onclick = () => {
  output.innerText = encriptar(input.value);
}