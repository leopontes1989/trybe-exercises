let n = 10;

for (let i=n-1; i > 0; i--) {
    n *= i;  
}

console.log(n);

//
let word = 'tryber';
let inverter = 'Invertendo palavras: ';
for (i=word.length; i>=0; i--) {
    console.log(word[i])
    inverter += word[i];
}

console.log(inverter);

//

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maisCaracteres = '';
let menosCaracteres = '';

for (i=0; i<array.length; i++) {
    if (array[i].length > maisCaracteres.length) {
        maisCaracteres = array[i];
    }
    if (array[i]) {
        menosCaracteres = array[i]
    }
    if (array[i].length < menosCaracteres.length) {
        menosCaracteres = array[i];
    }
}

console.log('Palavra com mais caracteres: ', maisCaracteres);
console.log('Palavra com menos caracteres: ', menosCaracteres);