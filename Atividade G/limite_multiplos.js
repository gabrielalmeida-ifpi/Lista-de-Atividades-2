/**
 * Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos.
 */

const { obter_numero, eh_multiplo, mostrar_texto } = require('./my_io_utils')

const functions = require('./my_io_utils')


function main(){

    //Main

    let num = functions.obter_numero('Insira um número:')
    let LimiteSuperior = functions.obter_numero('Insira um limite superior:')
    let LimiteInferior = functions.obter_numero('Insira um limite inferior:')
    let candidato = LimiteInferior;

    //While


    while(candidato <= LimiteSuperior){

        if(functions.eh_multiplo(candidato, num)){
            functions.mostrar_texto(candidato);
        }
    
        candidato = candidato + 1;
    } while(candidato <= LimiteSuperior){

        if(functions.eh_multiplo(candidato, num)){
            functions.mostrar_texto(candidato);
        }
    
        candidato = candidato + 1;
    }












}
main()