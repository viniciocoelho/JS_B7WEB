/* #toString - transforma todo o array em uma unica string

let lista = ["ovo", "farinha", "corante", "massa"];

let res = lista.toString();

console.log(res);

#join - transforma o array em uma string separando pelo divisor que eu colocar

let lista = ["ovo", "farinha", "corante", "massa"];

let res = lista.join("-");

console.log(res);

#indexOf - procura um item especifico no array e responde com a posição. Se não achar retorna -1.

let lista = ["ovo", "farinha", "corante", "massa"];

let res = lista.indexOf('corante');

console.log(res);

#POP() - remove o ultimo item do array
#SHIFT() - remove o primeiro item do array
#push() - adiciona um item ao array

let lista = ["ovo", "farinha", "corante", "massa"];

lista.pop();
lista.shift();
lista.push('prato');
lista[0] = 'clara';
lista[4] = 'liquidificador';

lista[ lista.length ] = 'casa';

let res = lista;

console.log(res);

# delete - apaga o item do array mas mantem o tamanho do array
# splice - (A PARTIR DE QUAL NR, QUANTOS EU QUERO QUE PEGUE)
# concat - junta 2 arrays
# sort - coloca em ordem alfabetica
# reverse - coloca em ordem alfabetica decrescente

let lista = ["ovo", "farinha", "corante", "massa"];
let lista2 = ['preto', 'liquidificador', 'forno'];

delete lista[1];
lista.splice(2, 1);
lista.sort();
lista.reverse(); 

let res = lista.concat(lista2);

console.log(res);

# MAP - executa uma função em todos os itens do array 

let lista = [45, 4, 9, 16, 25];
let lista2 =[];

lista2 = lista.map(function(item) {
    return item *2;
});

for(let i in lista) {
    lista2.push(lista[i] * 2);
}

let res = lista2;

console.log(res);

# FILTER - retorna true ou false pra cada item do array

let lista = [45, 4, 9, 16, 25];
let lista2 =[];

lista2 = lista.filter(function(item) {
    if(item < 20) {
        return true;
    } else {
        return false;
    }
    
});
let res = lista2;

console.log(res);

# EVERY - lê todos os item mas considera o array como todo
# SOME - Se tiver pelo menos 1 item true ele retorna true pra todos

let lista = [45, 4, 9, 16, 25];
let lista2 =[];

lista2 = lista.every(function(item) {
    if(item > 20) {
        return true;
    } else {
        return false;
    }
    
});

// outra maneira de escrever o if. A ? substitui o if e os : o else
lista2 = lista.every(function(item) {
    return (item > 3)? true : false;
    
});

let res = lista2;

console.log(res);

# FIND - retorna o item, index e array inteiro
# FINDINDEX - retorna a posição do elemento do array

let lista = [45, 4, 9, 16, 25];
let lista2 =[];

lista2 = lista.find(function(item){
return (item == 16)? true : false;
});

lista2 = lista.findIndex(function(item){
    return (item == 16)? true : false;
    });


let res = lista2;

console.log(res);
*/
