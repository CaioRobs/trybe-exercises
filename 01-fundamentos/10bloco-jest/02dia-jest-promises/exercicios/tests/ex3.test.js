const getUserName = require('../sources/ex2');
describe('getUserName', () => {
  test('should return Mark for id = 1', async () => {
    expect.assertions(1);
    const userName = await getUserName(1)
    expect(userName).toEqual('Mark');
  });
  test('should describe the error for any id = 3', async () => {
    expect.assertions(1);
    try {
      await getUserName(3);
    } catch (error) {
      expect(error).toEqual(new Error('User with 3 not found.'))
    }
  });
});
