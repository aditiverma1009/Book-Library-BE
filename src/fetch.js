const Models = require('../models/');


const fetch = () => {
  console.log('GET /sync');
  const newBookLibrary = [];
  return Models.books.findAll().then(allData =>
    allData.map((bookData) => {
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
          newBookLibrary.push(newRec);
        });
    })).then(returned => Promise.all(returned).then(() => newBookLibrary));
};
module.exports = fetch;
