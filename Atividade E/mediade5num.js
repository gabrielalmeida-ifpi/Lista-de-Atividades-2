/** Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média
/**/

const prompt = require('prompt-sync')()

function main() {

    //Main
    const A = obter_numero('Insira um número: ')
    const B = obter_numero('Insira novamente um número: ')
    const C = obter_numero('Insira novamente um número: ')
    const D = obter_numero('Insira novamente um número: ')
    const E = obter_numero('Insira novamente um número: ')

    //Processamento
    const media = calcular_media_entre_5(A, B, C, D, E)

    //Saída
    mostrar_texto(`Média = ${media}`)
    mostrar_texto('Maiores que a média:')
    maiores_que_a_media(media, A, B, C, D, E)



}

 //Funções

 function calcular_media_entre_5(A, B, C, D, E){

    const soma_dos_numeros = A + B + C + D + E
    const media_entre_5 = soma_dos_numeros / 5

    return media_entre_5


 }

 function maiores_que_a_media(media, A, B, C, D, E) {

    if (A > media){

        mostrar_texto(A)
    }

    if (B > media){

        mostrar_texto(B)
    }

    if (C > media){

        mostrar_texto(C)
    }

    if (D > media){

        mostrar_texto(D)
    }

    if (E > media){

        mostrar_texto(E)
    }

 }

 function obter_numero(label = 'Insira um numero: '){

    let numero = Number(prompt(label))

    return numero

}

function mostrar_texto(text){

    return console.log(text)


}


main()