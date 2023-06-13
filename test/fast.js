const axios = require('axios');
const { expect } = require('chai');
const logger = require('./logger');

describe('Axios API Request Tests', async () => {
  before(() => {
    logger.info('this is info from before');
  });
  beforeEach(() => {
    logger.info('this is info from beforeEach');
  });

  after(() => {
    expect(1).equal(2);
    logger.info('this is info from after');
  });
  afterEach(() => {
    logger.info('this is info from afterEach');
  });


  it('should be able get user list', async () => {
  });

  it('should be able post a user', async () => {
  });

  it('should be able get user list 2', async () => {
    expect(1).equal(2);
  });

  it('should be able post a user 2', async () => {
  });

  it('should be able get user list 3', async () => {
  });

  it('should be able post a user 3', async () => {
  });

  it('should be able get user list 4', async () => {
  });

  it('should be able post a user 4', async () => {
  });

  it('should be able get user list 5', async () => {
    throw new Error("error", "this is error", 5);
  });

  it('should be able post a user 5', async () => {
  });
});
