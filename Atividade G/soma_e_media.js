/**
 * Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.
 */     


const functions = require('./my_io_utils')

function main(){

    //Main

    let quantidade = functions.obter_numero('Insira quantidade de N: ')
    let quant_lista = quantidade
    let numero_inicial = functions.obter_numero('Insira um número: ')

    //While
    while (quant_lista > 0) {




        if (quant_lista < quantidade) {

           let numero_atual = functions.obter_numero('Insira mais um número:')
           numero_inicial = numero_inicial + numero_atual
        }

        quant_lista = quant_lista - 1



    }

    let media = numero_inicial / quantidade

    functions.mostrar_texto(`${numero_inicial} é a soma desses números e ${media} é a média deles.`)








}
main()
