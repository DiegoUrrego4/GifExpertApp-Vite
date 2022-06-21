import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
  const title = 'GifExpertApp';
  test('debe aparecer el título GifExpertApp en pantalla y en un h1', () => {
    render(<GifExpertApp />);
    expect(screen.getByText(title)).toBeTruthy();
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe(title);
  });
});
