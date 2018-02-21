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
    Model.books.bulkCreate(jsonArrayEditted).then(() => {
      const jsonArrayBookLike = data.map(ele => ({
        bookid: ele.id,
        likes: 0,
      }));
      Model.liketallies.destroy({ truncate: true });
      Model.liketallies.bulkCreate(jsonArrayBookLike).then(() => console.log('Like table created'));
      return true;
    });
    return true;
  });
  response('stored');
};

module.exports = [{
  path: '/storingBooks',
  method: 'POST',
  handler: handlerfn,
}];
