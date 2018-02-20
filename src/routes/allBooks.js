const httpGetData = require('../../src/getBookDetails');
const Model = require('../../models');

const getBooksFromAPI1 = (request, response) => {
  httpGetData().then((data) => {
    Model.books.destroy({ truncate: true });
    Model.books.bulkCreate(data).then(() => console.log('database created'));
    response(data);
  });
};


module.exports = [{
  path: '/allBooks',
  method: 'GET',
  handler: getBooksFromAPI1,
}];
