alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = 4;
console.log(numeroSecreto);
let chute;

white (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    if (chute == numeroSecreto) {
        alert(`Acertou o número secreto ${numeroSecreto}`);
    } else {
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else { 
            alert(`O número secreto é maior que ${chute}`);
        }
    }
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


