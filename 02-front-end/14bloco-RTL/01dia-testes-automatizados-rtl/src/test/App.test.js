import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Testando a aplicação, testando input', () => {
  render(<App />)
  const inputTask = screen.getByLabelText('Tarefa:');
  const labelTask = screen.getByText('Tarefa:');
  test('Verificando se o label e o input existem no documento', () => {
    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });
    
  test('Verificando o tipo do input', () => {
    expect(inputTask.type).toBe('text');
  });
});

describe('Testando o Botao', () => {
  render(<App />)
  const addButton = screen.getByRole('button', {value: 'Adicionar'});
  it('Existe um botão, com o texto "Adicionar"', () => {
    expect(addButton).toBeInTheDocument();
    expect(addButton).toBe('Adicionar');
  })
})
