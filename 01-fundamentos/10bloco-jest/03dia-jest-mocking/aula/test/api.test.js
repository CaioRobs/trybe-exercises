const api = require("../src/api");

describe("testando a requisição", () => {
  const apiURL = jest.spyOn(api, "fetchURL");
  afterEach(apiURL.mockReset);

  test("testando requisição caso a promise resolva", async () => {
    apiURL.mockResolvedValue('requisição realizada com sucesso');

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    expect(apiURL()).resolves.toBe('requisição realizada com sucesso');
    expect(apiURL).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promise seja rejeitada", async () => {
    apiURL.mockRejectedValue('a requisição falhou');

    try {
      expect(apiURL).toHaveBeenCalledTimes(0);
      await apiURL();
    } catch (error) {
      expect(error).toMatch('a requisição falhou');
      expect(apiURL).toHaveBeenCalledTimes(1);
      
    }
  });
});
