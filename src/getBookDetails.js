const rp = require('request-promise');

const getBookData = () => rp('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks')
  .then((jsonString) => {
    const jsonArray = JSON.parse(jsonString).books;
    const ratingPromises = [];
    for (let i = 0; i < jsonArray.length; i += 1) {
      const bookId = jsonArray[i].id;
      ratingPromises.push(rp(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${bookId}`));
    }
    const newjsonArray = jsonArray;
    return Promise.all(ratingPromises).then((values) => {
      // console.log(values);
      for (let i = 0; i < values.length; i += 1) {
        newjsonArray[i].rating = JSON.parse(values[i]).rating;
      }
      return (newjsonArray);
    });
  })
  .catch((error) => {
    console.log(`Crawling Failed${error}`);
  });


module.exports = getBookData;

// we have an array of books whose elements are objects
// we extract the id and send rp for each id
// we get response of rating
// which we add to object as an attribute
// API 1 - GET - https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks
// API 2 - GET - https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/{id}

