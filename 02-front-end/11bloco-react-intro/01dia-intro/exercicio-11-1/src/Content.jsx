import React, { Component } from 'react'

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

export default class Content extends Component {
  render() {
    return (
      <section className='card-section'>
        {conteudos.map((tarefa, index) => (
          <div
            key= {index}
            className='card'
          >
            <p>O conteúdo é: {tarefa.conteudo}</p>
            <p>Status: {tarefa.status}</p>
            <p>Bloco: {tarefa.bloco}</p>
          </div>
          )
        )}
      </section>
    )
  }
}
