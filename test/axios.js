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
    logger.info('GET: info');
    logger.info('GET: info2');
    logger.info('GET: info3');

    const res = await axios.get('https://reqres.in/api/users?page=2');
    expect(res.data.page).equal(2);
    expect(res.data.per_page).equal(6);

    logger.warn('GET: warn4');
    logger.error('GET: error5');
    logger.fatal('GET: fatal6');
  });

  it('should be able post a user', async () => {
    logger.info('POST: info');
    logger.info('POST: info2');
    logger.info('POST: info3');

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

    logger.warn('POST: warn4');
    logger.error('POST: error5');
    logger.fatal('POST: fatal6');
  });
});
