/**
 * Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão
Geométrica que tem por valor inicial A0 e razão R.
 */


const functions = require('./my_io_utils')

function main(){

    //Main
    const A0 = functions.obter_numero('Variável A0: ') 
    const limite = functions.obter_numero('Limite: ') 
    const R = functions.obter_numero('R: ') 

    //Saída
    checar_progressao_geometrica(A0, limite, R)
    





}

//Funções


function checar_progressao_geometrica(A0, limite, R){

    let contador = A0
    let razão = R
    let candidato_atual = A0

    while (contador < limite){

        candidato_atual = candidato_atual * razão

        if (candidato_atual < limite){
            
            functions.mostrar_texto(candidato_atual)

        }

        contador = contador * razão

    
    }


}



main()