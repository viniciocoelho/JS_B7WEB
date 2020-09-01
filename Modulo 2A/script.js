/*let dia = 7;
letdiaNome = "";

switch (dia) {
  case 6:
  case 7:
    diaNome = "Final de semana";
    break;

  default:
    diaNome = "Dia de semana";
    break;
}

document.getElementById("dia").innerHTML = "Hoje é " + diaNome;

FOR LOOP
FOR LOOP ARRAY

let carros = ["ferrari", "fusca", "palio", "corola"];

let html = "<ul>";

for (let i in carros) {
  html += "<li>" + carros[i] + "</li>";
}

hmtl = html + "</ul>";

document.getElementById("demo").innerHTML = html;
*/

let html = "";
let c = 0;

while (c < 10) {
  html += "numero: " + c + "<br/>";
  c++;
}

for (let c = 1; c <= 10; c++) {
  html += "Numero: " + c + "<br/>";
}

document.getElementById("demo").innerHTML = html;
