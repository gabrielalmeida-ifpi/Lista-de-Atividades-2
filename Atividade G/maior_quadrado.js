/**
 * Leia N, calcule e escreva o maior quadrado menor ou igual a N. Por exemplo, se N for igual a 38, o
maior quadrado menor que 38 é 36 (quadrado de 6).
 */


const functions = require('./my_io_utils')

function main(){

    //Main
    const num = functions.obter_numero('Valor de N: ')

    //Processamento
    const maior_quadrado = retornar_quadrado(num)

    //Saída
    functions.mostrar_texto(`O maior quadrado menor ou igual a ${num} é ${maior_quadrado}.`)


}
main()

//Funções

function retornar_quadrado(num){
    
    let candidato = num
    
    while (candidato <= num){

        if (eh_quadrado(candidato)){

            return candidato


        }

        candidato = candidato - 1


    }

}



function eh_quadrado(numero){

    potencializador = 0
    pos_potencia = 0

    while (potencializador != numero){

        pos_potencia = potencializador * potencializador

        if (pos_potencia === numero){

            return true

        }

        potencializador ++

    }

    return false

}


