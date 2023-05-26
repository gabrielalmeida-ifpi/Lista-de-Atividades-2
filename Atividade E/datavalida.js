/**
 *Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.
 */

const prompt = require('prompt-sync')();

//Entrada
var dia = Number(prompt('Insira um dia: '))
var mes = Number(prompt('Insira um mês: '))
var ano = Number(prompt('Insira um ano: '))


//Processamento e Saída
if(dia <= 30){
    dia_valido = true
}else{dia_valido = false}

if(mes <= 12){
    mes_valido = true
}else{mes_valido = false}

if(dia_valido === true && mes_valido === true){
    console.log('Essa data é válida.')
}else{console.log('Data inválida!')}