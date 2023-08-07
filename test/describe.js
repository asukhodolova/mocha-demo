describe('Parent', () => {
  before('before', () => {
  });

  after('after', () => {
  });

  beforeEach('beforEach', () => {
  });

  afterEach('afterEach', () => {
  });

  const types = ['API', 'WEB', 'MOBILE'];

  types.forEach((type) => {
    describe(`Nested for ${type}`, async () => {
      it('simple test', async () => {
      });
    });
  });

  describe('API', () => {
    it('api test 1', () => {
    });

    it('api test 2', () => {
    });

    it('api test 3', () => {
    });
  });

  describe('WEB', () => {
    it('web test 1', () => {
    });

    it('web test 2', () => {
    });

    it('web test 3', () => {
    });
  });

  describe('Mobile', () => {
    it('mobile test 1', () => {
    });

    it('mobile test 2', () => {
    });

    it('mobile test 3', () => {
    });
  });
});
