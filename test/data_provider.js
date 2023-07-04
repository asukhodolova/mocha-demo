const axios = require('axios');
const { expect } = require('chai');
const logger = require('./logger');

describe('Parent describe', async () => {
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

  const userTypes = ['real user', 'mock user'];

  userTypes.forEach((userType) => {
    describe(`nested describe for ${userType}`, async () => {
      it('should be able get user list', async () => {
        logger.info(`${userType}: GET info`);

        const res = await axios.get('https://reqres.in/api/users?page=2');
        expect(res.data.page).equal(2);
        expect(res.data.per_page).equal(6);
        expect(userType).equal('real user');

        logger.warn(`${userType}: GET warn`);
        logger.error(`${userType}: GET error`);
        logger.fatal(`${userType}: GET fatal`);
      });

      it('should be able post a user', async () => {
        logger.info(`${userType}: POST info`);

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
        expect(userType).equal('real user');

        logger.warn(`${userType}: POST warn`);
        logger.error(`${userType}: POST error`);
        logger.fatal(`${userType}: POST fatal`);
      });
    });
  });
});
