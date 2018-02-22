const Models = require('../models/');


const fetch = () => {
  console.log('GET /sync');
  const newBookLibrary = [];
  const returned = Models.books.findAll().then((allData) => {
    // newBookLibrary = [];
    allData.map((bookData, index) => {
      const bookDataid = bookData.bookid;
      return Models.liketallies.findOne({ where: { bookid: bookDataid } })
        .then((records) => {
          const newRec = {
            bookid: records.bookid,
            name: bookData.name,
            author: bookData.author,
            rating: bookData.rating,
            likes: records.likes,
          };
          return newRec;
        }).then((data) => {
          newBookLibrary[index] = data;
          return (newBookLibrary[index]);
        });
    });
  });
  console.log(returned);
  return returned;
};
module.exports = fetch;
