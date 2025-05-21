const { sumar } = require('./index');

describe('sumar', () => {
    it('sumar dos numeros', () => {
      const result = sumar(8, 5);
      expect(result).toEqual(13);
    });

     it('sumar dos numeros', () => {
      const result = sumar(-8, 4);
      expect(result).toEqual(-4);
    });
  });