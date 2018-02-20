const getData = require('../getBookDetails');

const Model = require('../../models');

const handlerfn = (request, response) => {
  getData().then((data) => {
    // let newJSONArray=[];
    const jsonArrayEditted = data.map(ele => ({
      author: ele.Author,
      bookid: ele.id,
      name: ele.Name,
      rating: ele.rating,
    }));
    Model.books.destroy({ truncate: true });
    Model.books.bulkCreate(jsonArrayEditted);
    response('STORED');
  });
};
module.exports = [{
  path: '/storingBooks',
  method: 'GET',
  handler: handlerfn,
}];
