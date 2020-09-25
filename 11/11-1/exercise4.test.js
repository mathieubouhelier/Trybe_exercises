const fetch = require('node-fetch');
const url2 = 'https://api.github.com/users/tryber/repos';

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      // console.log(data.map((repo) => repo.name))
      return data.map((repo) => repo.name)
    });
}
describe('Repository exist sd-01-week4-5-project-todo-list', () => {
    test('Retorne ok', async () => {
      const getReposList = await getRepos(url2);
      // console.log('getReposList', getReposList);
      expect(getReposList).toContain('covid-news-api');
      expect(new Set(getReposList)).toContain('covid-news-api');
    });
  });

 
