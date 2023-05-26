/**
 * Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o
valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores
possíveis para a variável opção são 1, 2 e 3.
 */

const prompt = require('prompt-sync')();

//Entrada
const opção = Number(prompt('Digite 1, 2 ou 3: '))
const num1 = Number(prompt('Digite um número: '))
const num2 = Number(prompt('Digite um número mais uma vez: '))
const num3 = Number(prompt('Digite outra vez um número: ' ))

//Processamento e Saída

if(opção != 1 && opção != 2 && opção != 3)
console.log('VALOR INVÁLIDO!')


if (opção === 1){
    console.log(num1)
}
if (opção === 2){
    console.log(num2)
}
if (opção === 3){
    console.log(num3)
}




