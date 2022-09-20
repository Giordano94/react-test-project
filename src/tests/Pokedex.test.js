import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testa  as funcionalidades da page Pokedex ', () => {
  test('verifica se a página tem um título "Encountered pokémons" ', () => {
    renderWithRouter(<App />);

    const pokedexHeading = screen.getByRole('heading', {
      name: /encountered pokémons/i,
      level: 2,
    });
    expect(pokedexHeading).toBeDefined();
  });

  test('verifica se exibe próximo pokémon da lista quando o botão é clicado ', () => {
    renderWithRouter(<App />);

    const defaultPokemonOnScreen = screen.getByText(/pikachu/i);
    expect(defaultPokemonOnScreen).toBeDefined();

    const nextPokemonBtn = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });

    userEvent.click(nextPokemonBtn);
    const nextPokemonOnScreen = screen.getByText(/charmander/i);
    expect(nextPokemonOnScreen).toBeDefined();
  });

  test('verifica se existe um botão de filtragem para cada tipo de pokémon', () => {
    renderWithRouter(<App />);
    const numberOfTypeButtons = 7;
    const testIdType = screen.getAllByTestId('pokemon-type-button');

    expect(testIdType).toHaveLength(numberOfTypeButtons);
  });

  test('verifica se o botão com o texto "All" está sempre visivel ', () => {
    renderWithRouter(<App />);

    const buttonAll = screen.getByRole('button', { name: /all/i });
    userEvent.click(buttonAll);
    expect(buttonAll).toBeDefined();
  });
});
