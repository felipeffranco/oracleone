alert('Boas vindas ao nosso site');

let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

let mensagemDeErro = 'Erro! Preencha todos os campos.';

nome = prompt('Digite o nome do usuário');
idade = prompt('Digite a idade do usuário');

if(idade >= 18) {
  alert(nome + ' pode tirar a habilitação!');
} else {
  alert(nome + ' não pode tirar a habilitação!');
}
