const studentRegister = (name, age) => {
  // seu código aqui
  try {
    if (name === '' || age === '') {
      throw new Error('Todas as informações são necessárias');
    } else if (age < 18) {
      return 'Ops, infelizmente nbesse momento você não pode fazer as aulas'
    } else {
      return `${name}, seja bem-vindo(a) à AuTrybe!`
    }
  } catch (error) {
    return error.message;  
  }
}

console.log(studentRegister('Leonardo', 10));

