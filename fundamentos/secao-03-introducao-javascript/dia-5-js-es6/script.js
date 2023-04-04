function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }
  }
  imprimeIdade();

console.log('--------------------------------------------------------------');
  const pessoa = {
    nome: 'Henri',
    idade: 20
  }
  
  const pessoa2 = {
    nome: 'Luna',
    idade: 19
  } // Altere essa estrutura para corrigir o erro.
  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);
  console.log('Nome:', pessoa2.nome);
  console.log('Idade:', pessoa2.idade);

  console.log('--------------------------------------------------------------');

  let favoriteFood = 'Lasanha';
  favoriteFood = 'Hambúrguer';
  console.log(favoriteFood);

  console.log('--------------------------------------------------------------');

  const nome = 'Adriana';
  const lastName = 'Soares';
  console.log(`Olá, ${nome} ${lastName}!`);
  function soma(a,b) {
    let resultado = a + b;
    return resultado;
  }
  let a = 3;
  let b = 5;
  console.log(`O resultado da soma de ${a}+${b} é: ${soma(a,b)}`);

  console.log('--------------------------------------------------------------');

  const numeroAleatorio = () => Math.random()
  console.log(numeroAleatorio());

  console.log('--------------------------------------------------------------');


  const hello = (nome) => `Olá, ${nome}!`
  let nome1 = 'Ivan';
  console.log(hello(nome1));

  console.log('--------------------------------------------------------------');

  
  const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;

  let nome2 = 'Ivan';
  let sobrenome = 'Pires';
  console.log(nomeCompleto(nome2, sobrenome));

