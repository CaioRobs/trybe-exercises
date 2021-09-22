test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(5).toBe(5); // expect(10) para simular o erro, (5) para passar enquanto testamos outros exemplos
      // console.log('Deveria falhar!');
      done();
    } catch (error) {
      done(error);
    }
  }, 500);
});
