// Use o array `estudantes` para os exercícios a seguir:

// 1 - Aqui na Trybe estamos criando um bot que vai dar os parabéns para as pessoas que entregaram 100% dos projetos, esse bot deve imprimir uma msg do tipo: "Olá pessoa, parabéns por ter finalizado 100% do nomeDoPorjeto", para cada pessoa.

// 2 - Depois de algumas ações focadas nas pessoas que ainda não tinham entregue o projeto conseguimos ter 100% de aprovação! As pessoas que ainda não tinham entregue conseguiram os 80% e precisamos atualizar nossos dados e imprimir o novo resultado.

const estudantes = [{
    nome: 'Henrique Baêta',
    projeto: 'Trybewarts',
    status: 78,
  },
  {
    nome: 'Rodrigo da Rosa',
    projeto: 'Trybewarts',
    status: 98,
  },
  {
    nome: 'Gabrielle Martines',
    projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Isaac Batista',
    projeto: 'Trybewarts',
    status: 98,
  },
  {
    nome: 'Ana Duarte',
    projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Jéssica Lopes',
    projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Ronald Lima',
    projeto: 'Trybewarts',
    status: 75,
  },
]

const sendMessages = estudantes => {
  estudantes.forEach(estudante => {
    if (estudante.status === 100) {
      console.log(`Olá ${estudante.nome}, parabéns por ter finalizado 100% do ${estudante.projeto}`);
    }
  });
}

sendMessages(estudantes);

const updateStatus = estudantes => {
  estudantes.forEach(estudante => {
    if (estudante.status < 80) {
      estudante.status = 80;
      console.log(`Nota de ${estudante.nome} atualizada para 80`);
    }
  });
}

updateStatus(estudantes)
