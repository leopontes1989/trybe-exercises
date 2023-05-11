const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

/*  FOR EACH 1 ------------->

  const showMails = (email) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
}

emailListInData.forEach(showMails); */

/*  FOR EACH 2 ---------->

  emailListInData.forEach((email) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
}) */

const numbers = [19, 21, 30, 3, 45, 22, 15];

/* FIND 1 -------------->
  console.log(numbers.find((element) => element % 3 === 0 && element % 5 === 0)); */

/*  FIND 2 ---------->
const names = ['João', 'Irene', 'Fernando', 'Maria'];

console.log(names.find((element) => element.length === 5)); */


// FIND 3 ----------->

/* const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

console.log(musicas.find((element) => element.id === '31031685')); */

//  SOME ------------>

/* const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
 return names.some((arr) => arr === name)
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro')); */

//  EVERY ----------->

/* const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

  const verifyAges = (obj, idade) => {
    return Object.values(obj).every((element) => element.age > idade)
  }

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14)); */