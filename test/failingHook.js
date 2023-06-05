const assert = require('assert');

describe('Hook Test Top Describe Fail', () => {
  before(() => {
    throw new Error('Before hook error fail');
  });

  it('Test Passing Test @pass', () => {
    assert.equal(1, 1);
  });

  it('Test Failing Test @fail', () => {
    assert.equal(2, 1);
  });

  it.skip(' Test Skipped Test @skip', () => {
    assert.equal(2, 1);
  });
});

describe('Hook Test Top Describe Pass', () => {
  before(() => {
    assert.equal(1, 1);
  });

  it('Test Failing Test @fail', () => {
    assert.equal(2, 1);
  });

  it('Test Passing Test @pass', () => {
    assert.equal(1, 1);
  });
});
