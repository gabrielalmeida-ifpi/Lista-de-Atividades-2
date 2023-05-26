/**
 * Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva
sua idade exata (em anos
 */

const prompt = require('prompt-sync')();

//Entrada
const ano = Number(prompt('Insira o ano em que você nasceu: '))
const mês = Number(prompt('Insira o mês em que você nasceu: '))
const dia = Number(prompt('Insira o dia em que você nasceu: '))

const ano_atual = Number(prompt('Insira o ano em que estamos: '))
const mês_atual = Number(prompt('Insira o mês atual: '))
const dia_atual = Number(prompt('Insira o dia de hoje: '))



//Processamento e Saída


if (mês_atual < mês) {
    aniversário = false;
}

if (mês_atual > mês) {
    aniversário = true;
}

if (mês_atual === mês) {
    if (dia_atual < dia) {
        aniversário = false;
    } else {
        aniversário = true;
    }
} 

if (aniversário === true) {
    idade_exata = ano_atual - ano;
}

if (aniversário === false) {
    idade_exata = ano_atual - ano - 1;
}

console.log('Sua idade exata é: ', idade_exata, 'anos.');
