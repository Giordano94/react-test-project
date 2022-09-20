import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testa  as funcionalidades do componente Pokemon ', () => {
  test('verifica se é renderizado um card com as informações de um pokémon ', () => {
    renderWithRouter(<App />);

    const pokemnonNameScreen = screen.getByText(/pikachu/i);
    expect(pokemnonNameScreen).toBeDefined();

    const pokemonTypeScreen = screen.getByTestId('pokemon-type');
    expect(pokemonTypeScreen).toBeDefined();
    expect(pokemonTypeScreen).toHaveTextContent('Electric');

    const pokemonWeightScreen = screen.getByText(/average weight: 6\.0 kg/i);
    expect(pokemonWeightScreen).toBeDefined();

    const pokemonImgScreen = screen.getByRole('img', {
      name: /pikachu sprite/i,
    });
    expect(pokemonImgScreen).toBeDefined();
    expect(pokemonImgScreen).toHaveAttribute('alt', 'Pikachu sprite');
    expect(pokemonImgScreen).toHaveAttribute(
      'src',
      'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
    );
  });

  test('verifica se  se existe um ícone de estrela no pokémon favoritado', () => {
    renderWithRouter(<App />);

    const pokemonDetailsLink = screen.getByText(/more details/i);
    expect(pokemonDetailsLink).toBeDefined();
    expect(pokemonDetailsLink).toHaveAttribute('href', '/pokemons/25');
    userEvent.click(pokemonDetailsLink);

    const pokemonFavoriteCheckbox = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    expect(pokemonFavoriteCheckbox).toBeDefined();
    userEvent.click(pokemonFavoriteCheckbox);

    const pokemonStarIcon = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
    });
    expect(pokemonStarIcon).toBeDefined();
    expect(pokemonStarIcon).toHaveAttribute('src', '/star-icon.svg');
    expect(pokemonStarIcon).toHaveAttribute(
      'alt',
      'Pikachu is marked as favorite',
    );
  });
});
