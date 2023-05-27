/**
 * Escreva a tabuada dos números de 1 a 10.
 */


const prompt = require('prompt-sync')();

function main() {

    let numero = 1
    let multiplicador = 1

    while (numero <= 10) {


        multiplicador = 1

        while (multiplicador <= 10) {

            let resultado = numero * multiplicador
            console.log(`${numero} x ${multiplicador} = ${resultado} `)

            multiplicador = multiplicador + 1
        }

        numero = numero + 1


    }

    














}
main()