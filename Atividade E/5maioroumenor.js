/** Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos os valores são 
diferentes
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
    const maior = maior_entre_5(A, B, C, D, E)
    const menor = menor_entre_5(A, B, C, D, E)

    //Saída
    mostrar_texto(`Maior: ${maior}`)
    mostrar_texto(`Menor: ${menor}`)



}

 //Funções

 function maior_entre_5(A, B, C, D, E){

    if (A > B && A > C && A > D && A > E){

        return A
    }

    if (B > A && B > C && B > D && B > E){

        return B
    }

    if (C > A && C > B && C > D && C > E){

        return C
    }

    if (D > A && D > B && D > C && D > E){

        return D
    }

    if (E > A && E > B && E > C && E > D){

        return E
    }


 }

 function menor_entre_5(A, B, C, D, E){

    if (A < B && A < C && A < D && A < E){

        return A
    }

    if (B < A && B < C && B < D && B < E){

        return B
    }

    if (C < A && C < B && C < D && C < E){

        return C
    }

    if (D < A && D < B && D < C && D < E){

        return D
    }

    if (E < A && E < B && E < C && E < D){

        return E
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