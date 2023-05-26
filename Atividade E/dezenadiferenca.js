/**
 * Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente
do algarismo da unidade.
 */

const prompt = require('prompt-sync')();

//Entrada
var numero = Number(prompt('Insira um número de dois dígitos: '))


//Processamento e Saída
if ((numero % 10) === (Math.floor(numero / 10))){
    console.log("O algarismo da dezena é igual ao da unidade.")
}
else {
    console.log ("O algarismo da dezena é diferente ao da unidade.")
}