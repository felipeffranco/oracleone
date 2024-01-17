alert('Boas vindas ao jogo do número secreto');

// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
let chute = prompt('Escolha um número entre 1 e 10');
console.log('Valor do chute:', chute);

let numeroSecreto = 4;

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);

if (chute == numeroSecreto) {
    alert('Acertou');
} else {
    // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
    console.log('Valor do número secreto:', numeroSecreto);
    alert('O número secreto era ' + numeroSecreto);
}



// alert('Boas vindas ao nosso site!');

// let numeroSecreto = (Math.random() * 100).toFixed(0);

// let numeroEscolhido = prompt("Escolha um número entre 1 e 100");

// if(numeroEscolhido === numeroSecreto) {
//   alert('Você descobriu o número secreto' + numeroSecreto);
// } else if (numeroEscolhido < numeroSecreto) {
//   alert('Número escolhido é menor que o número secreto');
//   numeroEscolhido = prompt('Escolha um número entre 1 e 100');
// } else if (numeroEscolhido > numeroSecreto) {
//   alert('Número escolhido é maior que o número secreto');
//   numeroEscolhido = prompt('Escolha um número entre 1 e 100');
// }


