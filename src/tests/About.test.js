import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('testa os links do componente App', () => {
  test('verifica se a página About contém o título "About Pokédex"', () => {
    renderWithRouter(<About />);

    const aboutTitle = screen.getByRole('heading', { name: /about pokédex/i });

    expect(aboutTitle).toBeInTheDocument();
  });

  test('verifica se a página About contém dois parágrafos"', () => {
    renderWithRouter(<About />);

    const paragraphOne = screen.getByText(
      /this application simulates a pokédex, a digital encyclopedia/i,
    );
    const paragraphTwo = screen.getByText(
      /one can filter pokémons by type, and see more details for each one of them/i,
    );

    expect(paragraphOne).toBeInTheDocument();
    expect(paragraphTwo).toBeInTheDocument();
  });

  test('verifica se a página About contém imagem das Pokédex"', () => {
    renderWithRouter(<About />);

    const pokedexImage = screen.getByRole('img', { name: /pokédex/i });
    expect(pokedexImage).toHaveAttribute(
      'src',
      'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png',
    );
    expect(pokedexImage).toBeInTheDocument();
  });
});
