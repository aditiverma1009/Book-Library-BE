const Model = require('../../models');

const handlerfn = (request, reply) => {
  Model.liketallies.upsert({
    bookid: request.params.bookid,
    likes: 1,
  }).then(() => reply({ message: 'Liked', status_code: 200 }))
    .catch(() => reply({ message: 'Invalid bookId to like', status_code: 500 }));
};


module.exports = [{
  path: '/like/{bookid}',
  method: 'POST',
  handler: handlerfn,
}];
