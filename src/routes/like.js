const httpGetData = require('../../src/getBookDetails');
// const Model = require('../../models');

const getBooksFromAPI1 = (request, response) => {
  httpGetData().then(() => {
    const idBook = request.params.id;
    console.log(idBook);
  });
  response('hi');
};
// Model.books.findAll({
//   where: {
//     bookid: idBook,
//   },
//     }).then((record) => {
//       let existingLikes = record.likes;
//       existingLikes += 1;
//       Model.liketallies.findOrCreate({
//         where: { //EXISTS LIKE  },
//         defaults: { bookid: idBook, likes: existingLikes },
//       })
//         .spread((user, created) => {
//           console.log(user.get({
//             plain: true,
//           }));
//           console.log(created);
//         });
//     }).then(() => response('created'), () => response('not found'));
//   }).catch(() => response('error'));
// };


module.exports = [{
  path: '/like/{id}',
  method: 'GET',
  handler: getBooksFromAPI1,
}];
