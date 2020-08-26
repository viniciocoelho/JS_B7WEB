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
console.log(resultado);

function clicou() {
    alert("Voce clicou no botão");
    document.getElementById("titulo").innerHTML = "Obrigado";
}

function digitou(evento) {
    if(evento.keyCode == 13) {
        let texto = document.getElementById("campo").value;
        console.log(texto);
    }
    
}
//cada tecla tem um keycode associado ao evento de teclado definido


function azul() {
    limpar();

    document.getElementById("titulo").classList.add('azul');
}

function vermelho() {
    limpar();

    document.getElementById("titulo").classList.add('vermelho');
}

function verde() {
    limpar();

    document.getElementById("titulo").classList.add('verde');
}

function limpar(){
    document.getElementById("titulo").classList.remove("azul");
    document.getElementById("titulo").classList.remove("vermelho");
    document.getElementById("titulo").classList.remove("verde");
}

function mostrarTelefone(elemento){
    elemento.style.display = 'none';
    document.getElementById("telefone").style.display = "block";

}


DECLARAÇÃO DE ARRAYS
ARRAY É UMA LISTAGEM NUMERADA.

let carro = ['palio', 'uno', 'corola', 'ferrari',
function() {
    console.log("teste 1 2 3");
}];
console.log(carro)
console.log(carro[0])
console.log(carro[3])
carro[4] () // executa a função armazenada na 4 posição


DECLARAÇÃO DE OBJETOS
OBJETO É UMA LISTAGEM NOMEADA

let carros = [
    'palio',
    'uno',
    'corolla'
];
console.log(carros[0]);

let carro = {
    nome: 'fiat',
    modelo: 'uno',
    peso: '800kg',
    ligado:false,
    ligar: function() {
        this.ligado = true;
        console.log("Ligando o "+this.modelo);
        console.log("vrum vrum");
    },
    acelerar:function() {
        if(this.ligado== true){
            console.log("riiiiiiii");
        } else {
            console.log(this.nome+" "+this.modelo+" não está ligado!");
        }
    }
};
console.log(carro['nome']);
console.log(carro.nome);
carro.ligar();
carro.acelerar();

DECLARANDO OBJETOS DENTRO DE ARRAYS

let carros = [
    {nome:'fiat', modelo:'palio'},
    {nome:'fiat', modelo:'uno'},
    {nome:'ferrari', modelo:'spider'},
    {nome: 'corolla', modelo:'toyota'}
];
console.log(carros[2]['nome']);
console.log(carros[2].nome);
*/



