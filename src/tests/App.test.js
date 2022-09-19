import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
// import About from '../pages/About';

describe('testa os links do componente App', () => {
  test('verifica se se a aplicação é redirecionada para a página inicial ', () => {
    const { history } = renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();

    userEvent.click(homeLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('verifica se se a aplicação é redirecionada para a página about', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toBeInTheDocument();

    userEvent.click(aboutLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  test('verifica se se a aplicação é redirecionada para a página favorites', () => {
    const { history } = renderWithRouter(<App />);

    const favoritesLink = screen.getByRole('link', {
      name: /favorite pokémons/i,
    });
    expect(favoritesLink).toBeInTheDocument();

    userEvent.click(favoritesLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  test('verifica se se a aplicação é redirecionada para a página NOt Found', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/not-found');
    });

    const notFoundText = screen.getByRole('heading', {
      name: /page requested not found/i,
    });
    expect(notFoundText).toBeDefined();
  });
});
