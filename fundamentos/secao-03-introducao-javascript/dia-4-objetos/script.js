let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Bem vinda, ' +info.personagem);

  info['recorrente'] = 'Sim';
  console.log(info);

  for (key in info) {
    console.log(key);
  }
  console.log('------------');
  for (key in info) {
    console.log(info[key]);
  }

let info2 = info;

info2.personagem = 'Margarida e Tio Patinhas';
info2.origem = "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178";
info.nota = 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas';
info.recorrente = 'Ambos recorrentes';

console.log(info2);

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
    {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      }
    ]
  };

  console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama '" + leitor.livrosFavoritos[0].titulo + "'.");

  leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      },
  );

  console.log(leitor);

  console.log('Julia tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');
