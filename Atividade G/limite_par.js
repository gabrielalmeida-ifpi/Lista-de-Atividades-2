/**
 * Leia LimiteSuperior e LimiteInferior e escreva todos os números pares entre os limites lidos.
 */

const { obter_numero, eh_multiplo, mostrar_texto, eh_par } = require('./my_io_utils')

const functions = require('./my_io_utils')

function main(){

    //Main

    let LimiteInferior = functions.obter_numero('Insira um limite inferior:')
    let LimiteSuperior = functions.obter_numero('Insira um limite superior:')
    let candidato = LimiteInferior;

    //While

    while(candidato <= LimiteSuperior){

        if(functions.eh_par(candidato)){
            functions.mostrar_texto(candidato);
        }
    
        candidato = candidato + 1;
    }









}
main()