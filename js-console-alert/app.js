let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function btnConsole() {
  alert('o botao foi clicado');
}

function btnAlert() {
  alert('Eu amo JS');
}

function btnPrompt() {
  let cidade = prompt('Digite uma cidade do Brasil');
  alert(`Estive em ${cidade} e lembrei de você`);
}

function btnSoma() {
  let num1 = parseInt(prompt('Digite um número'));
  let num2 = parseInt(prompt('Digite outro número'));
  let soma = num1 + num2;
  alert(soma);
}
