import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('testa a página NotFound', () => {
  test('verifica se a página tem um título " Page requested not found"', () => {
    renderWithRouter(<NotFound />);

    const notFoundTitle = screen.getByRole('heading', {
      name: /page requested not found/i,
    });
    expect(notFoundTitle).toBeDefined();
  });

  test('verifica se a página NotFound contém imagem "', () => {
    renderWithRouter(<NotFound />);

    const NotFoundImage = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });
    expect(NotFoundImage).toHaveAttribute(
      'src',
      'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif',
    );
    expect(NotFoundImage).toBeInTheDocument();
  });
});
