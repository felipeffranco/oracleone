alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);



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


