exports.mochaHooks = () => ({
    beforeAll() {
      console.log('root beforeAll');
    },
    afterAll(done) {
      console.log('root afterAll');
      done();
    },
    beforeEach: [
      function beforeEachRootHookNoReporting() {
        console.log('root beforeEach');
      },
    ],
    afterEach: [
      function afterEachRoot() {
        console.log('root afterEach');
      },
    ],
  });
  