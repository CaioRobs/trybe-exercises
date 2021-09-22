const uppercase = require('../sources/ex1');

describe('Verifica se a função uppercase', () => {
  // it('retorna uma string', () => {
  //   expect(typeof uppercase('string', callback)).toBe('string');
  // });
  it('retorna a mesma palavra, porém maíscula', (done) => {
    uppercase('string', (data) => {
      expect(data).toBe('STRING');
      done();
    })
  });
});
