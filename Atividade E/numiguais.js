/**
 * Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.
 */

const prompt = require('prompt-sync')();

//Entrada
var num1 = Number(prompt('Insira um número: '))
var num2 = Number(prompt('Insira outro número: '))
var num3 = Number(prompt('Insira mais outro número: '))


//Processamento e Saída
if ((num1 != num2) && (num2 != num3) && (num1 != num3))
{
    console.log ("Nenhum desses números é igual aos outros.")
}
if ((num1 === num2 && num2 != num3))
{
    console.log ( "Dois desses números são iguais")
}
else
if ((num1 = num2) && (num2 === num3))
{
    console.log ("Três desses números são iguais")
}



