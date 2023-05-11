const employeeData = (name) => {
const newName = name.replace(' ', '_').toLowerCase();
const email = `${newName}@trybe.com`;
return { 
  nomeCompleto: name,
  email: email,
}
}

const newEmployees = () => {
  const employees = {
    id1: employeeData('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employeeData('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employeeData('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const numeroAleatorio = () => Math.round(Math.random() * 5);

const verifyWins = (numeroAleatorio, numeroApostado) => numeroAleatorio === numeroApostado ? `Números: ${numeroAleatorio} / ${numeroApostado} - Parabéns, você ganhou` : `Números: ${numeroAleatorio} / ${numeroApostado} - Tente novamente`;


const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corretorAuto = (gabarito, resposta) => {
  let points = 0;
  gabarito.forEach((gabarito, index) => {
    if (resposta[index] === gabarito) {
      points += 1;
    } else if (resposta[index] === 'N.A') {
      points = points;
    } else if (resposta[index] !== gabarito) {
      points -= 0.5;
    }
  })
  return `Total de pontos: ${points}`
}



