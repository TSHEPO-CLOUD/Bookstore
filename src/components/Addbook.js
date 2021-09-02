import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function Addbook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Action');

  const submitBookToStore = () => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };

    dispatch(addBook(newBook));
  };


return (
  <div>
    <h3>ADD NEW BOOK</h3>
    <div className="addbook">
      <input type="text" name="book-name" required placeholder="Book Title" />
      <select name="category">
        <option value="Action">Sports</option>
        <option value="Horror">Weather</option>
        <option value="Comedy">Comedy</option>
        <option value="Magic">Science Fiction</option>
      </select>
      <button type="button">ADD BOOK</button>
    </div>
  </div>
);
}

export default Addbook;
