describe("primeiro describe com dois testes", () => {
  it("2 é igual a 3", () => {
    expect(2).toBe(3);
  });

  it("outro teste", () => {
    expect(true).toBe(false);
  });
});

describe('outro describe', () => {
  it('terceiro teste', () => {
    expect(5).toBe(4);
  })
});
