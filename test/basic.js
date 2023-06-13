/* eslint-disable func-names */
const fs = require('fs');
const assert = require('assert');
const { CurrentLaunch, CurrentTest } = require("@zebrunner/javascript-agent-mocha");

describe('Example Test Top Describe', () => {
  beforeEach(function () {
    CurrentTest.setMaintainer(this.currentTest, 'asukhodolova');
    CurrentTest.attachLabel(this.currentTest, 'common', 'common_value');
    CurrentTest.attachArtifactReference(
      this.currentTest,
      'common_docs',
      'https://zebrunner.com/documentation/',
    );
    CurrentTest.uploadArtifactFromFile(this.currentTest, 'index.js', './index.js');
  });

  it('Example Test Passing Test @pass', function () {
    CurrentLaunch.attachLabel('launch', 'first', 'one more', '', null);
    CurrentLaunch.attachArtifactReference('documentation', 'https://zebrunner.com/documentation/');
    CurrentLaunch.uploadArtifactFromFile('README', './README.md');

    CurrentTest.attachLabel(this.test, 'pass', 'pass1', 'pass2', '', null, 'pass3');
    CurrentTest.attachArtifactReference(
      this.test,
      'pass_docs',
      'https://zebrunner.com/documentation/',
    );
    const buffer = fs.readFileSync('./package.json');
    CurrentTest.uploadArtifactBuffer(this.test, 'package.json', 'application/json', buffer);

    assert.equal(1, 1);
  });

  it('Example Test Failing Te(st @fail', function () {
    CurrentTest.attachLabel(this.test, 'fail', 'fail1', 'fail2', '', null, 'fail3');
    CurrentTest.attachArtifactReference(
      this.test,
      'fail_docs',
      'https://zebrunner.com/documentation/',
    );
    CurrentTest.uploadArtifactFromFile(this.test, 'README', './README.md');
    const buffer = fs.readFileSync('./.prettierrc.json');
    CurrentLaunch.uploadArtifactBuffer('simple_json', 'application/json', buffer);

    assert.equal(2, 1);
  });

  // it('Revert Test', function () {
  //   CurrentTest.revertRegistration(this.test);
  // });

  it.skip('Example Test Skipped Test @skip', () => {
    assert.equal(2, 1);
  });
});
