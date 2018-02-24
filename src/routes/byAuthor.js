const fetch = require('../../src/fetch');


const getBooksFromAPI1 = (request, response) => {
  fetch().then((books) => {
    // console.log(books);
    const booksByAuthor = {};
    books.forEach((book) => {
      if (book.author in booksByAuthor) {
        // console.log(`if not exist${book.author}`);
        booksByAuthor[book.author].push(book);
      } else {
        const { author } = book;
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
