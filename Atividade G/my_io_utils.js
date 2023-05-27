const prompt = require('prompt-sync')();

 function obter_numero(label = 'Digite um numero: '){

    let numero = Number(prompt(label))

    return numero

}


 function obter_texto(label = 'Digite um texto: '){

    const texto = prompt(label)

    return texto
}

 function mostrar_texto(texto = 'Texto: '){

    console.log(texto)

}

function eh_divisor(candidato, numero){

    return numero % candidato === 0

}

function eh_primo(numero){

    if (numero <= 0) return false

    return contar_divisores(numero) === 2
}


function eh_multiplo(candidato, numero) {

    return candidato % numero === 0

}

function eh_par(numero){

    return numero % 2 === 0

}

module.exports = {
    
    obter_numero,
    obter_texto,
    mostrar_texto,
    eh_divisor,
    eh_primo,
    eh_multiplo,
    eh_par
    
  }