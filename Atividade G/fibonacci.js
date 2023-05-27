/**
 * Leia um número N, calcule e escreva os N primeiros termos de seqüência de Fibonacci
(0,1,1,2,3,5,8...). O valor lido para N sempre será maior ou igual a 2.
 */


const functions = require('./my_io_utils')

function main() {

    //Main
    const num_de_termos = functions.obter_numero('Insira o número de termos: ')

    //Saída
    mostrar_fibonacci(num_de_termos)
    
}

//Funções

function mostrar_fibonacci (num_de_termos) {

    let contador = 0
    let sequencia = 0
    let somador = 0
    let somador_2 = 1
    
    functions.mostrar_texto('0')
    functions.mostrar_texto('1')

    while (contador < num_de_termos) {

        sequencia = somador + somador_2 

        functions.mostrar_texto(sequencia)
    
        somador_2 = somador + somador_2
        somador = sequencia - (somador_2 - 1)
        

        contador++

    }

}










main()