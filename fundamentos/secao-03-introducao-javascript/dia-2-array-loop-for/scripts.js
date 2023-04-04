/* let n = 10;

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
 */
/* console.log('Palavra com mais caracteres: ', maisCaracteres);
console.log('Palavra com menos caracteres: ', menosCaracteres);
 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

for (i=0; i<numbers.length; i++) {
    console.log(numbers[i])
} */

/* console.log('Vetor em ordem crescente: ', numbers); */

/* for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

for (i=0; i<numbers.length; i++) {
    console.log(numbers[i])
}

console.log('Vetor em ordem decrescente: ', numbers); */


/* let numbersMultiply = [];

for (let i = 0; i < 1; i++) {
    for (let j = 0; j < numbers.length; j++) {
        if (j < numbers.length - 1) {
            numbersMultiply.push(numbers[j] * numbers[j + 1]);
        }
        else {
            numbersMultiply.push(numbers[j] * 2);
        }
    }
}
console.log(numbers);
console.log(numbersMultiply); */


for (let i = 0; i < 5; i++) {
    console.log('*****');
    for (let j = 0; j < 5; j++) {

    }
}










