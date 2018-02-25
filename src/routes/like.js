const Model = require('../../models');

const handlerfn = request => Model.liketallies.findOne({ where: { bookid: request.params.key } })
  .then(() => {
    Model.liketallies.update(
      { likes: 1 },
      { where: { bookid: request.params.key } },
    ).then(records => records);
  });


module.exports = [{
  path: '/like/{key}',
  method: 'POST',
  handler: handlerfn,
}];
