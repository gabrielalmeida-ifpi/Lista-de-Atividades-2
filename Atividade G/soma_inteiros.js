/**
 * Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.
 */


const prompt = require('prompt-sync')();

function main(){

    //Main

    const num = Number(prompt('Número: '))

    
    let inteiro = 1

    while(inteiro < num){
        
        resultado = num + inteiro


        inteiro = inteiro + 1
        

    }

    console.log(resultado)
    










}
main()