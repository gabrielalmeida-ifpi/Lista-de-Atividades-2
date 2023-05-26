/**
 * Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3
(três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se
formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou
escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero).
 */

const prompt = require('prompt-sync')();



//Entrada
var numa = Number(prompt('Insira um número: '))
var numb = Number(prompt('Insira um número novamente: '))
var numc = Number(prompt('Insira um nú mero novamente: '))

//Processamento e Saída
if (étriangulo(numa, numb, numc) === false){
    console.log('Esses números NÃO PODEM formar um triângulo!!!')
}
else{
    console.log('Esses números podem formar um triângulo. Esse triângulo será...', tipagem(numa, numb, numc))
}












function tipagem (num1, num2, num3){

if ((num1 != num2) && (num1 != num3) && (num2 != num3)){
    return 'escaleno.'
}else
{
    if ((num1 === num2) && (num1 === num3) && (num2 === num3)){
        return 'equilátero.'}
        else{
            return 'isósceles.'
        }


}
}




function étriangulo (num1, num2, num3){

    if(num1 + num2 < num3 || num1 + num3 < num2 || num2 + num3 < num1)
    {
        return false
    }
    else return true
}

