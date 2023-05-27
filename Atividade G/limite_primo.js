/**
 * Leia LimiteSuperior e LimiteInferior e escreva todos os números primos entre os limites lidos.
 */


const functions = require('./my_io_utils')

function main(){

   //Main

   let LimiteInferior = functions.obter_numero('Insira um limite inferior:')
   let LimiteSuperior = functions.obter_numero('Insira um limite superior:')
   let candidato = LimiteInferior;

   //While

   while(candidato <= LimiteSuperior){

       if(functions.eh_primo(candidato)){
           functions.mostrar_texto(candidato);
       }
   
       candidato = candidato + 1;
   }









}
main()