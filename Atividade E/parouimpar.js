/** Leia 1 (um) número inteiro e escreva se este número é par ou impar
/**/

const prompt = require('prompt-sync')()

function main() {

    //Main
    const numero = obter_numero('Insira um número: ')
    

    //Processamento
    const par_ou_impar = verificar_se_eh_par_ou_impar(numero)

    //Saída
    mostrar_texto(`Esse número é ${par_ou_impar}`)



}

 //Funções

 function verificar_se_eh_par_ou_impar(numero){

    if (numero % 2 === 0){

        return 'par'
    }else {return 'ímpar'}


 }

 function obter_numero(label = 'Insira um numero: '){

    let numero = Number(prompt(label))

    return numero

}

function mostrar_texto(text){

    return console.log(text)


}


main()