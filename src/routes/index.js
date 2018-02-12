const allBooksRoute = require('./allBooks');

const getHelloWorld = (request, response) => {
  response('On root');
};

module.exports = [{
  path: '/',
  method: 'GET',
  handler: getHelloWorld,
}].concat(allBooksRoute);
