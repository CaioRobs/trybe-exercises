const math = require('../src/math');
// jest.mock("../src/math");
const mockSubtrair = jest.spyOn(math, 'subtrair')

math.multiplicar = jest.fn().mockImplementation((a, b) => a * b);
math.somar = jest.fn().mockImplementation((a, b) => a + b);
math.dividir = jest.fn().mockImplementation((a, b) => a / b);

describe('math should', () => {
  describe('1', () => {
    it('Faça o mock da funcão subtrair e teste sua chamada.', () => {
      expect(math.subtrair(2, 1)).toEqual(1);
      expect(math.subtrair).toHaveBeenCalled();
      expect(math.subtrair).toHaveBeenCalledTimes(1);
      expect(math.subtrair).toHaveBeenCalledWith(2, 1);
    });
  });

  describe('2', () => {
    it('Faça o mock da função multiplicar e implemente como retorno padrão o valor 10 . Teste a chamada e o retorno.', () => {
      math.multiplicar.mockReturnValue(10);
      math.multiplicar(5, 4);
      expect(math.multiplicar).toHaveBeenCalled();
      expect(math.multiplicar).toHaveBeenCalledTimes(1);
      expect(math.multiplicar).toHaveBeenCalledWith(5, 4);
      expect(math.multiplicar(10, 10)).toEqual(10);
    });
  });

  describe('3', () => {
    it('Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.', () => {
      expect(math.somar(5, 3)).toEqual(8);
      expect(math.somar).toHaveBeenCalled();
      expect(math.somar).toHaveBeenCalledTimes(1);
      expect(math.somar).toHaveBeenCalledWith(5, 3);
    });
  });

  describe('4', () => {
    it('Faça o mock da função dividir e implemente um retorno padrão com o valor 15 . Implemente também os seguintes valores para a primeira e segunda chamadas: 2 e 5. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.', () => {
      math.dividir.mockReturnValue(15);
      math.dividir.mockReturnValueOnce(2);
      math.dividir.mockReturnValueOnce(5);

      expect(math.dividir(10, 2)).toEqual(2);
      expect(math.dividir(10, 2)).toEqual(5);
      expect(math.dividir(30, 2)).toEqual(15);

      expect(math.dividir).toHaveBeenCalled();
      expect(math.dividir).toHaveBeenCalledTimes(3);
      expect(math.dividir).toHaveBeenCalledWith(10, 2);
      math.dividir.mockReset();
    });
  });

  describe('5', () => {
    it("Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.", () => {
      mockSubtrair.mockClear();
      mockSubtrair.mockReturnValue(20);
      expect(mockSubtrair(5, 5)).toEqual(20);
      expect(mockSubtrair(2, 1)).toEqual(20);
      expect(mockSubtrair).toHaveBeenCalled();
      expect(mockSubtrair).toHaveBeenCalledTimes(2);
      expect(mockSubtrair).toHaveBeenCalledWith(2, 1);

      mockSubtrair.mockRestore();
      expect(math.subtrair(2, 1)).toEqual(1);
    });
  });
});
