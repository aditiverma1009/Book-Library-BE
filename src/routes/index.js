const allBooksRoute = require('./allBooks');
const storingBooks = require('./storingBooks');
const like = require('./like');
const unlike = require('./unlike');
const byAuthor = require('./byAuthor');

const getHelloWorld = (request, response) => {
  response('On root');
};

module.exports = [{
  path: '/',
  method: 'GET',
  handler: getHelloWorld,
}].concat(allBooksRoute)
  .concat(storingBooks)
  .concat(like)
  .concat(byAuthor)
  .concat(unlike);
