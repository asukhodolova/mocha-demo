const logger = require('./logger');
const { CurrentTest } = require("@zebrunner/javascript-agent-mocha");

exports.mochaHooks = () => ({
  beforeEach: [
    function beforeEachRoot() {
      CurrentTest.initLogging(this.currentTest);
      logger.info('EVENT_TEST_BEGIN');
      logger.info('some logs');
    },
  ],
  afterEach: [
    function afterEachRoot() {
      logger.info('EVENT_TEST_END');
    },
  ],
});
