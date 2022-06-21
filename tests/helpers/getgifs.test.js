import { getGifs } from '../../src/helpers/getgifs';

describe('Pruebas en getgifs()', () => {
  const category = 'Dragon Ball';
  test('debe de retornar un arreglo de gifs', async () => {
    const gifs = await getGifs(category);
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
