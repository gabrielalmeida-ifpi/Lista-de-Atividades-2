/**
 * Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.
 */

    const prompt = require('prompt-sync')();

    //Entrada
    const numero = Number(prompt('Digite um número entre 0 e 100: '));
    
    //Processamento e Saída
    if (numero === 2 || numero === 3 || numero === 5 || numero === 7) {
        console.log(`${numero} é um número primo.`);
    } else if (numero === 0 || numero === 1 || numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
        console.log(`${numero} não é um número primo.`);
    } else {
        console.log(`${numero} é um número primo.`);
    }
    