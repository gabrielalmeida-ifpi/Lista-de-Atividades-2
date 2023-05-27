/**
 * Leia N e escreva todos os números inteiros pares de 1 a N.
 */


const prompt = require('prompt-sync')();

function main(){

    //Main

    const num = Number(prompt('Número: '))
    contagem_pares(num)

    //Funções

    function contagem_pares(num){

    let inteiro = 1

    while(inteiro <= num){

        if(inteiro % 2 === 0){
            
            console.log(inteiro)
        } 

        inteiro = inteiro + 1



    }


    }



}
main()