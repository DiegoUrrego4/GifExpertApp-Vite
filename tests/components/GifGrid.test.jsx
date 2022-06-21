import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'One Punch';
  test('Debe de mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });
  test('Debe de mostrar items cuando se cargan las imágenes mediante el useFetchGifs()', () => {
    const gifs = [
      {
        id: 'Asbj6daiRG89',
        title: 'Saitama Punch',
        url: 'https://saitamapunch.gif',
      },
      {
        id: 'FBjkhsfk88bdagjh',
        title: 'Saitama Mad',
        url: 'https://saitamamad.gif',
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img')).toHaveLength(2);
  });
});
