const logger = require('./logger');
const assertChai = require('chai').assert;
const { expect } = require('chai');
// eslint-disable-next-line no-unused-vars
const should = require('chai').should();
const { CurrentLaunch, CurrentTest } = require("@zebrunner/javascript-agent-mocha");

describe('Chai assertions', () => {
  // before(() => {
  //   CurrentLaunch.attachLabel('chai', 'assertions');
  //   CurrentLaunch.attachArtifactReference('github', 'https://github.com/zebrunner');
  //   CurrentLaunch.uploadArtifactFromFile('sample', 'basic.js');
  // });

  describe('that fail', () => {
    it('assert style', () => {
      logger.warn('ASSERT this is warn');
      logger.error('ASSERT this is error');
      logger.fatal('ASSERT this is fatal');
      logger.debug('ASSERT this is debug');
      logger.info('ASSERT this is info');

      const child = logger.child({ a: 'property' });
      child.info('fail: hello child!');

      const numbers = [1, 2, 3, 4, 5];
      assertChai.isArray(numbers, 'is array of numbers');
      assertChai.include(numbers, 2, 'array contains 2');
      assertChai.lengthOf(numbers, 4, 'array contains 5 numbers');
    });

    it('expect style', () => {
      const numbers = [1, 2, 3, 4, 5];
      expect(numbers).to.be.an('array').that.includes(2);
      expect(numbers).to.have.lengthOf(4);
    });

    it('should style', () => {
      const numbers = [1, 2, 3, 4, 5];
      numbers.should.be.an('array').that.includes(2);
      numbers.should.have.lengthOf(4);
    });
  });

  describe('that pass', () => {
    it('assert style', () => {
      logger.info('ASSERT pass: hello world');

      const child = logger.child({ a: 'property' });
      child.info('ASSERT pass: hello child!');

      const numbers = [1, 2, 3, 4, 5];
      assertChai.isArray(numbers, 'is array of numbers');
      assertChai.include(numbers, 2, 'array contains 2');
      assertChai.lengthOf(numbers, 5, 'array contains 5 numbers');
    });

    it('expect style', () => {
      const numbers = [1, 2, 3, 4, 5];
      expect(numbers).to.be.an('array').that.includes(2);
      expect(numbers).to.have.lengthOf(5);
    });

    it('should style', () => {
      const numbers = [1, 2, 3, 4, 5];
      numbers.should.be.an('array').that.includes(2);
      numbers.should.have.lengthOf(5);
    });
  });
});
