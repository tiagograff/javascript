// Funções de cálculo
const soma = (num1, num2) => num1 + num2;

const subtracao = (num1, num2) => num1 - num2;

// Função que solicita os valores para o cálculo
const obterValores = () => {
  const numbers = [];
  let escolha = '';

  while (escolha !== 'não' && escolha !== 'n') {
    escolha = prompt('Deseja adicionar um valor para a operação? "sim (s)", "não (n)"');
    if (escolha === 'sim' || escolha === 's') {
      numbers.push(Number(prompt('Digite um valor:')));
    } else if (escolha !== 'não' && escolha !== 'n') {
      alert('Opção inválida');
    }
  }

  return numbers;
};

// Função que exibe o resultado dos cálculos
const imprime = (total) => {
  alert(`O valor da operação é: ${total}`);
  return total;
};

let voltar = true;
let numbers = [];

alert('Bem-vindo(a) à calculadora. Aqui você pode realizar algumas operações.');

while (voltar) {
  let ok = true;

  while (ok) {
    let escolha = prompt('Qual operação você deseja realizar? Digite o número da opção:\n1. Soma\n2. Subtração');

    if (escolha === '1') {
      let valoresCalculo = obterValores();
      if (valoresCalculo.length >= 2) {
        let total = soma(...valoresCalculo);
        let valorFinal = imprime(total);
        numbers.unshift(valorFinal);
      } else {
        alert('Você precisa inserir pelo menos dois valores para realizar a soma.');
      }
    } else if (escolha === '2') {
      let valoresCalculo = obterValores();
      if (valoresCalculo.length >= 2) {
        let total = subtracao(...valoresCalculo);
        let valorFinal = imprime(total);
        numbers.unshift(valorFinal);
      } else {
        alert('Você precisa inserir pelo menos dois valores para realizar a subtração.');
      }
    } else {
      alert('Opção inválida. Tente novamente.');
    }

    let continuar = prompt('Deseja fazer mais uma operação? Responda com "sim" ou "não"');

    if (continuar === 'sim' || continuar === 's') {
      ok = true;
    } else if (continuar === 'não' || continuar === 'n') {
      ok = false;
    }
  }

  let querVoltar = prompt('Deseja voltar para a tela inicial? Responda com "sim" ou "não"');

  if (querVoltar === 'sim' || querVoltar === 's') {
    voltar = true;
    ok = true;
  } else if (querVoltar === 'não' || querVoltar === 'n') {
    voltar = false;
  } else {
    alert('Valor inválido');
  }
}
