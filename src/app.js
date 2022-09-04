/* eslint-disable */
import "bootstrap";
import "./style.css";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

// Generación del número aleatorio según tamaño del arreglo
function randomNumber(size) {
  return Math.floor(Math.random() * size);
}

// Construcción del string con la excusa
function excuseGenerator(wordsWho, wordsAction, wordsWhat, wordsWhen) {
  return (
    wordsWho[randomNumber(wordsWho.length)] +
    " " +
    wordsAction[randomNumber(wordsAction.length)] +
    " " +
    wordsWhat[randomNumber(wordsWhat.length)] +
    " " +
    wordsWhen[randomNumber(wordsWhen.length)]
  );
}

window.onload = function() {
  let excuse = document.getElementById("excuse");
  excuse.innerHTML = excuseGenerator(who, action, what, when);
};
