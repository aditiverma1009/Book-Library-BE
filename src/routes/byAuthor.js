const fetch = require('../../src/fetch');


const getBooksFromAPI1 = (request, response) => {
  fetch().then((books) => {
    const booksByAuthor = {};
    books.forEach((book) => {
      if (book.Author in booksByAuthor) {
        booksByAuthor[book.Author].push(book);
      } else {
        const author = book.Author;
        booksByAuthor[author] = [];
        booksByAuthor[author].push(book);
      }
    });
    // console.log(booksByAuthor);
    return booksByAuthor;
  }).then(data => response(data));
};


module.exports = [{
  path: '/byAuthor',
  method: 'GET',
  handler: getBooksFromAPI1,
}];
