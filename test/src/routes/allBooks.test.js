const server = require('../../../server');

describe('Testcase for /allBooks route', () => {
  it('Should print On allBooks ', (done) => {
    const options = {
      method: 'GET',
      url: '/allBooks',
    };
    server.inject(options, (response) => {
      expect(response.payload).toBe('On allBooks');
      done();
    });
  });

  it('Testing for status code', (done) => {
    const options = {
      method: 'GET',
      url: '/allBooks',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
