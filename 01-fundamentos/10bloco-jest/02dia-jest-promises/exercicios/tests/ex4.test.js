const getRepos = require('../sources/ex4');

test('getRepos should return a list that contains specific repos', async () => {
  const API_URL = 'https://api.github.com/orgs/tryber/repos';
  const reposList = await getRepos(API_URL);
  expect(reposList.includes('sd-01-week4-5-project-todo-list') && reposList.includes('sd-01-week4-5-project-meme-generator')).toBeTruthy();
});
