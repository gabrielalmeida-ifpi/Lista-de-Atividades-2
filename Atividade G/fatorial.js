/**
 * Leia um número, calcule e escreva seu fatorial.
 */


const prompt = require('prompt-sync')();

function main(){

    
    let num = Number(prompt('Número: '))
    let fatorador = num - 1




    while(fatorador != 0){

        num = num * fatorador
        fatorador = fatorador - 1
        
    }

    console.log(`O fatorial desse número é: ${num}`)









    
}
main()