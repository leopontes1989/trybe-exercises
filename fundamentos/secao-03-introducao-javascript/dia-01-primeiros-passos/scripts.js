let a = 5;
let b = 8;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);

a = 10;
b = 8;

if (a > b) {
    console.log('A é maior que B.');
} else if (a < b) {
    console.log("B é maior que A.");
}
//3
let c = 2;

if (a > b && a > c) {
    console.log('A é maior que todos.');
} else if (b > a && b > c) {
    console.log("B é maior que todos.");
} else if (c > a && c > b) {
    console.log("C é maior que todos.")
}

// 4
if (c > 0) {
    console.log('Positivo');
} else if ( c < 0) {
    console.log('Negativo');
} else if (c === 0) {
    console.log('Zero')
}

// 5
if ( a === b && b === c) {
    console.log('São lados de um retângulo');
} else {
    console.log('Angulos inválidos')
}

//6

let peca = 'cavalo';

switch (peca) {
    case 'peao':
        console.log('Apenas para frente')
        break;
    case 'cavalo':
        console.log('Movimentos em L')
        break;
    case 'bispo':
        console.log('Diagonal')
        break;
    case 'torre':
        console.log('Frente e lateral')
        break;
    case 'rainha':
        console.log('Todos os movimentos possíveis')
        break;
    case 'rei':
        console.log('Todos os lados, apenas uma casa')
        break;
    default:
        console.log('Peça inválida!')
}

// 7
let nota = 15;

if (nota >= 90) {
    console.log('A');
} else if (nota >= 70) {
    console.log('B');
} else if (nota >= 60) {
    console.log('C');
} else if (nota >= 50) {
    console.log('D');
} else if (nota >= 30) {
    console.log('E');
} else if (nota < 30) {
    console.log('F');
} else {
    console.log('Nota inválida');
}

// 8
if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    console.log('True');
} else {
    console.log('False');
}

// 9
if (a % 2 ==! 0 || b % 2 ==! 0 || c % 2 ==! 0) {
    console.log('True');
} else {
    console.log('False');
}

// 10
let custo = 50;
let valorVenda = 80;

let lucroPorMil = (valorVenda - custo) * 1000;

console.log('Lucro com a venda de 1000 unidades: ', lucroPorMil);

// 11
let salarioBruto = 15000;
let aliquotaInss = 0;
let impostoDeRenda = 0;
let salarioLiquido = 0;
let salarioBase = 0;

if (salarioBruto <= 1556.94) {
    aliquotaInss = 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquotaInss = 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaInss = 0.11;
} else if (salarioBruto > 5189.82) {
    aliquotaInss = 570,88;
}

if (salarioBruto > 5189.82) {
    salarioBase = salarioBruto - aliquotaInss;
} else {
    salarioBase = salarioBruto - (salarioBruto * aliquotaInss);
}

if (salarioBase <= 1903.98) {
    impostoDeRenda = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    impostoDeRenda = (salarioBase * 0.075) - 142.8;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    impostoDeRenda = (salarioBase * 0.15) - 354,8;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    impostoDeRenda = (salarioBase * 0.225) - 636,13;
} else if (salarioBase > 4664.68) {
    impostoDeRenda = (salarioBase * 0.275) - 869.36;
}

salarioLiquido = salarioBase - impostoDeRenda;
console.log('--------------------------------------------------------------------------------------------');
console.log('O valor da alíquota do inss é: R$', aliquotaInss, '- O valor do imposto de renda total é: R$',impostoDeRenda, '- Sendo assim o salário líquido do cidadão será: R$', salarioLiquido);




