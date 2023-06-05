const fs = require('fs');
const assert = require('assert');
const { CurrentLaunch } = require("@zebrunner/javascript-agent-mocha");

describe('Example Test Top Describe', () => {
  it('Example Test Passing Test @pass', () => {
    CurrentLaunch.attachLabel('launch', 'first', 'one more', '', null);
    CurrentLaunch.attachArtifactReference('documentation', 'https://zebrunner.com/documentation/');
    //CurrentLaunch.uploadArtifactFromFile('README', '../package.json');
    // const buffer = fs.readFileSync('../package.json');
    // CurrentLaunch.uploadArtifactBuffer('simple_json', 'application/json', buffer);
    assert.equal(1, 1);
  });

  it('Example Test Failing Test @fail', () => {
    assert.equal(2, 1);
  });

  it.skip('Example Test Skipped Test @skip', () => {
    assert.equal(2, 1);
  });
});
