import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = 'aBI9ITaYCitPj6DreagZ';

const getBooks = async () => axios.get(`${url}/apps/${appId}/books`).then((result) => {
  const books = [];
  if (result.status === 200) {
    const { data } = result;
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(data)) {
      const id = key;
      const obj = value;
      const book = {
        item_id: id,
        title: obj[0].title,
        category: obj[0].category,
      };
      books.push(book);
    }
  }
  return books;
});