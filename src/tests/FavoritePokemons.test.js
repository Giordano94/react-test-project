import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('testa página FavoritesPokemon ', () => {
  test('verifica se se é exibida na tela a mensagem "No favorite pokemon found"', () => {
    renderWithRouter(<FavoritePokemons />);

    const noFavoriteText = screen.getByText(/no favorite pokemon found/i);

    expect(noFavoriteText).toBeInTheDocument();
  });
});
