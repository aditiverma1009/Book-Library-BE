const server = require('../../../server');

describe('Testcase for /storingBooks route', () => {
  it('Should make table and response stored', (done) => {
    const options = {
      method: 'POST',
      url: '/storingBooks',
    };
    server.inject(options, (response) => {
      expect(response.payload).toBe('stored');
      done();
    });
  });

  it('Testing for status code', (done) => {
    const options = {
      method: 'POST',
      url: '/storingBooks',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
