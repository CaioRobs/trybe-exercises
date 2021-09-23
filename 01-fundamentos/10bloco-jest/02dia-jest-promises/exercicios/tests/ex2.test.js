const getUserName = require('../sources/ex2');
describe('getUserName', () => {
  test('should return Mark for id = 1', () => {
    expect(getUserName(1)).resolves.toEqual('Mark');
  });
  test('should describe the error for any id = 3', () => {
    expect(getUserName(3)).rejects.toEqual(new Error('User with 3 not found.'))
  });
});
