const math2 = require('../src/math2');
jest.mock("../src/math2");

describe('math2 should', () => {
  describe('1', () => {
    it('Faça o mock da funcão subtrair e teste sua chamada.', () => {
      math2.subtrair.mockImplementation((a, b) => a - b);
      math2.subtrair(2, 1);
      expect(math2.subtrair).toHaveBeenCalled();
      expect(math2.subtrair).toHaveBeenCalledTimes(1);
      expect(math2.subtrair).toHaveBeenCalledWith(2, 1);
    });
  });

  describe('2', () => {
    
  });

  describe('3', () => {

  });

  describe('4', () => {

  });

  describe('5', () => {

  });
});
