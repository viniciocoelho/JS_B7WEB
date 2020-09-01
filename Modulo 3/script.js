/* let nome = "vinicio coelho guimaraes";

console.log(nome.length);

let resultado = nome.indexOf("v");

if (nome.indexOf("truta") > -1) {
  resultado = "Achou";
} else {
  resultado = "Não Achou";
}

console.log(resultado);

SLICE - separa uma parte da informação slice(INICIO, QUANTIDADE)

let nome = "vinicio coelho guimaraes";

let resultado = nome.slice(2, 10);

console.log(resultado); 

# SUBSTRING - semelhante ao slice mas não tem a funcionalidade de começar de tras pra frente usando menos p. ex: (-10)

let nome = "vinicio coelho guimaraes";

let resultado = nome.substring(2, 10);

console.log(resultado);

# SUBSTR - define o começo e quantos caracteres vai pegar

let nome = "vinicio coelho guimaraes";

let resultado = nome.substr(-4, 2);

console.log(resultado);

# REPLACE - substitui uma parte da string (TEXTO A SUBSTITUIR, TEXTO QUE SUBSTITUIRÁ)


let nome = "vinicio coelho guimaraes";

let resultado = nome.replace("coelho", "nino");

console.log(resultado);

let nome = "eu gosto de carros";

let resultado = nome.replace("carros", "moto");

console.log("nome: ", nome);
console.log("resultado: ", resultado); 

let nome = "eu gosto de carros";

let resultado = nome.toUpperCase();

console.log("nome: ", nome);
console.log("resultado: ", resultado);

#CONCAT - concatena String - é meio inútil

let nome = "eu gosto de carros";

let resultado = nome.concat("", "coelho");

console.log("nome: ", nome);
console.log("resultado: ", resultado);

# TRIM - retira os espaços vazios
let nome = "                 coelho";

let resultado = nome.trim().length;

console.log(resultado);
# SPLIT - usa algum critério para dividir a string e tranforma em um array
*/
let nome = "ovo, corante, farinha, massa";

let resultado = nome.split(", ");

console.log(resultado);
