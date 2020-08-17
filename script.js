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
alert(total);*/

/*CONDICIONAIS*/
var hora = 15;
if( hora < 12 ) {
    console.log("Bom dia");
} else if (hora < 18 ) {
    console.log("Boa tarde");
} else if( hora <= 23) {
    console.log("Boa Noite");
};