/* # Date - retorna a data completa do sistema.
         Os meses do ano começam no zero.

let d = new Date();

console.log(d);
console.log(d.toDateString());
console.log(d.toUTCString());
console.log(d.toString());


# 

let d = new Date();

let novoValor = d.getFullYear();
let novoValor = d.getMonth();
let novoValor = d.getDay();

let novoValor = Date.now(); //fornece o timestemp em milesegundos a partir de 1970
console.log(novoValor);


## Definindo uma data específica

let d = new Date();

d.setFullYear(2022);
d.setMonth(11);
 Soma uma quantidade de dias a partir da data atual
d.setDate( d.getDate() + 5);

d.setHours( d.getHours() + 24 );

let novoValor = d;

console.log(novoValor); */
