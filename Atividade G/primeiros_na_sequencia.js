/**
 * Leia N, calcule e escreva os N primeiros termos de seqüência (1, 3, 6, 10, 15,...).
 */


const functions = require('./my_io_utils')

function main(){

    //Main
    const num_de_termos = functions.obter_numero('Número de termos: ')

    //Saída
    functions.mostrar_texto('Números da sequência: ')
    n_primeiros_termos(num_de_termos)
    








}

function n_primeiros_termos(num_de_termos){

    let contador = 0
    let sequencia = 0
    let somador = 1

    while (contador < num_de_termos) {

        sequencia = sequencia + somador

        functions.mostrar_texto(sequencia)
    
        somador = somador + 1

        contador++

    }

}


main()