/*Modos de exibir elementos na tela com o JS
/*Se relaciona apenas com a área da página 
document.getElementById("titulo").innerHTML="Opa mudei";
document.write("Algum texto");

/*Se relaciona com a janela do navegador
window.alert("mensagem de exemplo");

/*Mostra apenas no console
console.log("Aparece so no console")*/

/*Declaração de variáveis
var nome = 'coelho';
var idade = 90;
alert(nome);

var x = 10;
var y = 15;
var total = x + y;
alert(total);

var - escopo global, pode ser acessada em qualquer lugar
let - só fica disponível em uma área específica do código
const - constante, não permite alteração


/*CONDICIONAIS
var hora = 15;
if( hora < 12 ) {
    console.log("Bom dia");
} else if (hora < 18 ) {
    console.log("Boa tarde");
} else if( hora <= 23) {
    console.log("Boa Noite");
};

Alterando o DOM

document.getElementById("titulo").innerHTML = "Ola Mundo";

var titulo = document.getElementById("titulo");
titulo.innerHTML = "Segundo titulo";

var campo = document.getElementById("campo");
campo.value = "Coelho";


Funções

function alterar(titulo) {
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("campo").value = titulo;
};

//Dá execução a função
alterar('Texto alterado');

function somar(x, y) {
    let total = x + y;
    return total;
    //document.getElementById("campo").value = total;
};

var resultado = somar(10, 15);
console.log(resultado);*/

function clicou() {
    alert("Voce clicou no botão");
    document.getElementById("titulo").innerHTML = "Obrigado";
}