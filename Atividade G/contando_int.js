/**
 * Leia N e escreva todos os números inteiros de 1 a N.
 */


const prompt = require('prompt-sync')();

function main(){

    //Main

    const num = Number(prompt('Número: '))
    contagem_int(num)
 
    
    //Funções

    function contagem_int(num){

       let inteiro = 1

        while(inteiro <= num){
            
            console.log(`${inteiro}`)
            inteiro = inteiro + 1
         

        }





    }










}
main()