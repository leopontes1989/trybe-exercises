let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let count = 0;
let maiorNumero = 0;
let numerosImpares = 0;
let menorNumero = 5000;

for (i=0; i<numbers.length; i++) {
    console.log(numbers[i])
    count += numbers[i];
    if (numbers[i] > maiorNumero) {
        maiorNumero = numbers[i];
    }
    if (numbers[i] % 2 !== 0) {
        numerosImpares++;
    }
    if (numbers[i] < menorNumero) {
        menorNumero = numbers[i];
    }
}

console.log(count);

media = count / numbers.length;
console.log('Média aritmética: ', media);

if(media > 20) {
    console.log('Valor maior que 20!')
} else {
    console.log('Valor menor ou igual que 20!');
}

console.log('Maior número do array é: ', maiorNumero);

if (numerosImpares === 0) {
    console.log('Nenhum número ímpar encontrado!');
} else {
    console.log('Números ímpares: ', numerosImpares);
}

console.log('Menor número do array: ', menorNumero);

let arrayNumeros = [];

for (i = 1; i <= 25; i++) {
    arrayNumeros.push(i);
}

console.log('Array de números até 25: ', arrayNumeros);

for (i=0; i<arrayNumeros.length; i++) {
    console.log(arrayNumeros[i] / 2);
}