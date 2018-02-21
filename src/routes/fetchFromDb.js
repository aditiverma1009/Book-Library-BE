const fetch = require('../fetch');

const handlerfn = (request, response) => {
  fetch().then((data) => {
    response(data);
  });
};

module.exports = [{
  path: '/fetchFromDb',
  method: 'GET',
  handler: handlerfn,
}];

