/** Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um. 
Escreva na tela qual dos professores tem salário total maior.
/**/

const prompt = require('prompt-sync')()

function main() {

    //Main
    const professor_A_horas = obter_numero('Insira a quantidade de horas do prof. A: ')
    const professor_B_horas = obter_numero('Insira a quantidade de horas do prof. B: ')

    const professor_A_valor = obter_numero('Insira o valor da hora do prof. A: ')
    const professor_B_valor = obter_numero('Insira o valor da hora do prof. B: ')

    //Processamento
    const salario_prof_A = calcular_salario(professor_A_horas, professor_A_valor)
    const salario_prof_B = calcular_salario(professor_B_horas, professor_B_valor)
    const maior_salario = verificar_maior_salario(salario_prof_A, salario_prof_B)

    //Saída
    mostrar_texto(`O professor ${maior_salario} tem um salário maior!`)



}

 //Funções

 function calcular_salario(horas, valor){

    const salario = valor * horas

    return salario
 }

 function verificar_maior_salario(salario_A, salario_B){

    if (salario_A > salario_B){

        return 'A'

    }

    else if (salario_B > salario_A){

        return 'B'

    }
    
    else {return 'A'}


 }

 function obter_numero(label = 'Insira um numero: '){

    let numero = Number(prompt(label))

    return numero

}

function mostrar_texto(text){

    return console.log(text)


}


main()