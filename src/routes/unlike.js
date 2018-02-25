// const Model = require('../../models');

// const handlerfn = request => Model.liketallies.update(
//   { likes: 0 },
//   { where: { bookid: request.params.key } },
// ).then(records => records);

// module.exports = [{
//   path: '/unlike/{key}',
//   method: 'POST',
//   handler: handlerfn,
// }];

const Model = require('../../models');

const handlerfn = request => Model.liketallies.findOne({ where: { bookid: request.params.key } })
  .then(() => {
    Model.liketallies.update(
      { likes: 0 },
      { where: { bookid: request.params.key } },
    ).then(records => records);
  });


module.exports = [{
  path: '/unlike/{key}',
  method: 'POST',
  handler: handlerfn,
}];
