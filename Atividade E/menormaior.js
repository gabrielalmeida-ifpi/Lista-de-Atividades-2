/**
 * Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.
 */

const prompt = require('prompt-sync')();

//Entrada
var num1 = Number(prompt('Insira um número: '))
var num2 = Number(prompt('Insira um número novamente: '))


//Processamento e Saída
if (num1 > num2){
    console.log(`${num1} é maior que ${num2}`)
}
else
if (num2 > num1){
    console.log(`${num2} é maior que ${num1}`)
}
else
if (num1 = num2){
    console.log("Nenhum deles é maior ou menor que o outro.")
}