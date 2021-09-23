const findAnimalsByType = require('../src/findAnimalsByType');

describe('Quando o tipo do animal existe', () => {
  test('Retorne a lista de cachorros', () => {
    findAnimalsByType('Dog').then((listDogs) => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    })
  });
  test('Retorne a lista de gatos', () => {
    findAnimalsByType('Cat').then((catsList) => (
      expect(catsList[0].name).toEqual('Preguiça')
    ));
  });
});

describe('Quando o tipo não existe', () => {
  test('Retorna o erro para tipo de animal inexistente', async () => {
    try {
      await findAnimalsByType('Lion');
    } catch (error) {
      expect(error).toEqual(new Error('Não possui esse tipo de animal.'));
    }
  });
  test('Testando com async/await, testando o reject', async () => {
    expect.assertions(1);
    try {
      await findAnimalsByType('Lion');
    } catch (error) {
      expect(error).toEqual(new Error('Não possui esse tipo de animal.'));
    }
  });
});

describe('Testando promise - findAnimalsByType', () => {
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', () => {
      const listDogs = [{
          name: 'Dorminhoco',
          age: 1,
          type: 'Dog'
        },
        {
          name: 'Soneca',
          age: 2,
          type: 'Dog'
        },
      ];
      return expect(findAnimalsByType('Dog')).resolves.toEqual(listDogs);
    });
  });

  describe('Quando o tipo de animal não existe', () => {
    test('Retorna um erro', () => (
      expect(findAnimalsByType('Lion'))
      .rejects.toEqual(new Error('Não possui esse tipo de animal.'))
    ));
  });
});

describe('Testando Async/Await - findAnimalsByType', () => {
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', async () => {
      const listDogs = [{
          name: 'Dorminhoco',
          age: 1,
          type: 'Dog'
        },
        {
          name: 'Soneca',
          age: 2,
          type: 'Dog'
        },
      ];
      await expect(findAnimalsByType('Dog')).resolves.toEqual(listDogs);
    });
  });

  describe('Quando o tipo de animal não existe', () => {
    test('Retorna um erro', async () => {
      expect.assertions(1);
      await expect(findAnimalsByType('Lion')).rejects
        .toEqual(new Error('Não possui esse tipo de animal.'));
    });
  });
});
