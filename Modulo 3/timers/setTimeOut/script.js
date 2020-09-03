// setTimeOut - criar um temporizador para iniciar a função

let timer;

function comecar() {
  timer = setTimeout(function() {
    document.querySelector('.demo').innerHTML = 'Rodou'
  }, 2000);
};

function parar () {
  clearTimeout(timer);
}