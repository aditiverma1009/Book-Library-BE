const Model = require('../../models');

const handlerfn = (request, reply) => {
  Model.liketallies.upsert({
    bookid: request.params.bookid,
    likes: 0,
  }).then(() => reply({ message: 'Unliked', status_code: 200 }))
    .catch(() => reply({ message: 'Invalid bookId to unlike', status_code: 500 }));
};

module.exports = [{
  path: '/unlike/{bookid}',
  method: 'POST',
  handler: handlerfn,
}];
