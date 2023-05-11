const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Tiff'];

const initialValue = {};

const resultado = names.reduce((acc, valorAtual) => {
  if (Object.keys(acc).includes(valorAtual)) {
    acc[valorAtual] +=1
  } else {
    acc[valorAtual] = 1;
  }
return acc;
}, initialValue);

console.log(resultado);