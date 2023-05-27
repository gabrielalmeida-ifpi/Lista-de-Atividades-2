/**
 * Leia N e uma lista de N números e escreva o maior número da lista.
 */


const functions = require('./my_io_utils')

function main(){

    //Main
    const num = functions.obter_numero('Insira um número: ')

    //While

    while(candidato != 0){

       let candidato = functions.obter_numero('Insira mais outro número ou insira 0: ')

       if(candidato >= num){

        let maior = candidato

       }else{

        let maior = num
       }

    }


}
main()