/**  Leia 3 (três) números, verifique e escreva o maior entre os números lidos.
/**/

const prompt = require('prompt-sync')()

function main() {

    //Main
    const A = obter_numero('Insira um número: ')
    const B = obter_numero('Insira novamente um número: ')
    const C = obter_numero('Insira novamente um número: ')
   

    //Processamento
    const maior = maior_entre_3(A, B, C)

    //Saída
    mostrar_texto(`Maior: ${maior}`)

}

 //Funções

 function maior_entre_3(A, B, C, D, E){

    //Casos Fáceis

    if (A > B && A > C){

        return A
    }

    if (B > A && B > C){

        return B
    }

    if (C > A && C > B){

        return C
    }

    //Casos Igualdade

    if (A === B && A > C){

        return A
    }

    if (B === C && B > A){

        return B
    }

    if (C === A && C > B){

        return C
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