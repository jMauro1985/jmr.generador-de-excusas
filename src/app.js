/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["El perro", "Mi abuela", "El cartero", "Mi pájaro"];
  let action = ["comió", "orinó", "aplastó", "rompió"];
  let what = ["mi tarea", "mi teléfono", "el coche"];
  let when = [
    "antes de la clase",
    "cuando estaba durmiendo",
    "mientras hacía ejercicio",
    "durante mi almuerzo",
    "mientras rezaba"
  ];
  function generateExcuse() {
    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);
    return `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
  }
  document.getElementById("generate").addEventListener("click", function() {
    let excuseElement = document.getElementById("excuse");
    excuseElement.textContent = generateExcuse();
  }); //write your code here
};
