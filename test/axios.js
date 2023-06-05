const axios = require('axios');
const { expect } = require('chai');

describe('Axios API Request Tests', async () => {
  it('should be able get user list', async () => {
    const res = await axios.get('https://reqres.in/api/users?page=2');
    expect(res.data.page).equal(2);
    expect(res.data.per_page).equal(6);
  });

  it('should be able post a user', async () => {
    const randomName = 'testName';
    const randomJobTitle = 'testJobTitle';
    const res = await axios
      .post('https://reqres.in/api/users', {
        name: randomName,
        job: randomJobTitle,
      })
      .then((response) => response.data);
    expect(res.name).equal(randomName);
    expect(res.job).equal(randomJobTitle);
  });
});
