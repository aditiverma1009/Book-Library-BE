const httpGetData = require('../../src/getBookDetails');

const getBooksFromAPI1 = (request, response) => {
  httpGetData().then(data => response(data));
};


module.exports = [{
  path: '/allBooks',
  method: 'GET',
  handler: getBooksFromAPI1,
}];
