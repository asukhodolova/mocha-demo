const axios = require('axios');
const { expect } = require('chai');
const logger = require('./logger');

describe('Axios API Request Tests', async () => {
  before('before', () => {
    logger.info('before: info');
  });

  after('after', () => {
    logger.info('after: info');
  });

  beforeEach('beforEach', () => {
    logger.info('beforeEach: info');
  });

  afterEach('afterEach', () => {
    logger.info('afterEach: info');
  });

  it('should be able get user list', async () => {
    logger.info('AXIOS GET: info');
    logger.info('AXIOS GET: info2');
    logger.info('AXIOS GET: info3');

    const res = await axios.get('https://reqres.in/api/users?page=2');
    expect(res.data.page).equal(2);
    expect(res.data.per_page).equal(6);

    logger.warn('AXIOS GET: warn4');
    logger.error('AXIOS GET: error5');
    logger.fatal('AXIOS GET: fatal6');
  });

  it('should be able post a user', async () => {
    logger.info('AXIOS POST: info');
    logger.info('AXIOS POST: info2');
    logger.info('AXIOS POST: info3');

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

    logger.warn('AXIOS POST: warn4');
    logger.error('AXIOS POST: error5');
    logger.fatal('AXIOS POST: fatal6');
  });
});
