import React from 'react';
import { cleanup, render, screen, act } from '@testing-library/react';
import App from '../App';
import MockAPI from './MockAPI';
import userEvent from '@testing-library/user-event';

describe('1 - Testando os componentes do App', () => {
  beforeEach(async () => {
    jest.fn(fetch).mockResolvedValue(MockAPI);
    await act(async () => {
      render(<App />);
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

   test('1.1 - Verificando componentes que possuem data-testid', async () => {

    const searchNames = screen.getByTestId('name-filter');
    expect(searchNames).toBeInTheDocument();

    const coluna = screen.getByTestId('column-filter');
    expect(coluna).toBeInTheDocument();

    const operador =screen.getByTestId('comparison-filter')
    expect(operador).toBeInTheDocument();

    const valor = screen.getByTestId('value-filter')
    expect(valor).toBeInTheDocument()

    const filtrar = screen.getByTestId('button-filter')
    expect(filtrar).toBeInTheDocument()

    const removerFiltros = screen.getByTestId('button-remove-filters')
    expect(removerFiltros).toBeInTheDocument()
    
    const tabela = await screen.findByRole('table')
    expect(tabela).toBeInTheDocument()
  });

  test('1.2 - Testando o input search for names', async () => {

    const searchNames = screen.getByTestId('name-filter');

    userEvent.type(searchNames, /too/i)    
    const tatooine = await screen.findByRole('cell', {  name: /tatooine/i})
    expect(tatooine).toBeInTheDocument()
  });

  test('1.3 - Testando filterByNUmericValues maior que', async () => {
    const coluna = screen.getByTestId('column-filter');
    const operador = screen.getByTestId('comparison-filter')
    const valor = screen.getByTestId('value-filter')
    const filtrar = screen.getByTestId('button-filter')

    userEvent.selectOptions(coluna, ['population']);
    userEvent.selectOptions(operador, ['maior que']);
    userEvent.type(valor, '10000');
    userEvent.click(filtrar);
    expect(screen.getByText('population maior que 010000')).toBeInTheDocument();
    expect(await screen.findByText(/naboo/i)).toBeInTheDocument();
  });

  test('1.4 - Testando filterByNUmericValues menor que', async () => {
    const coluna = screen.getByTestId('column-filter');
    const operador = screen.getByTestId('comparison-filter')
    const valor = screen.getByTestId('value-filter')
    const filtrar = screen.getByTestId('button-filter')

    userEvent.selectOptions(coluna, ['diameter']);
    userEvent.selectOptions(operador, ['menor que']);
    userEvent.type(valor, '5000');
    userEvent.click(filtrar);
    expect(screen.getByText('diameter menor que 05000')).toBeInTheDocument();
    expect(await screen.findByText(/endor/i)).toBeInTheDocument();
  });

  test('1.5 - Testando filterByNUmericValues igual a', async () => {
    const coluna = screen.getByTestId('column-filter');
    const operador = screen.getByTestId('comparison-filter')
    const valor = screen.getByTestId('value-filter')
    const filtrar = screen.getByTestId('button-filter')

    userEvent.selectOptions(coluna, ['rotation_period']);
    userEvent.selectOptions(operador, ['igual a']);
    userEvent.type(valor, '23');
    userEvent.click(filtrar);
    expect(screen.getByText('rotation_period igual a 023')).toBeInTheDocument()
    expect(await screen.findByText(/hoth/i)).toBeInTheDocument();
  }); 
});
