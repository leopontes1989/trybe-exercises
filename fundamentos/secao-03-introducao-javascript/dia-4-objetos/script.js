/* let info = {
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
 */

  let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  function customerInfo(order) {
    console.log('Olá '+ order.order.delivery.deliveryPerson +', entrega para: '+ order.name + ', Telefone: ' + order.phoneNumber + ', ' + order.address.street + ', ' + order.address.number + ', AP:' + order.address.apartment);
  }
  
  customerInfo(order);
  
  function orderModifier(order) {
    order.name = 'Luiz Silva';
    order.payment = 50;
    console.log('Olá, ' + order.name + ' o valor total do seu pedido de marguerita, peperoni e coca-cola zero é de: R$ '+ order.payment + ',00.');
  }
  
  orderModifier(order);

  // 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.