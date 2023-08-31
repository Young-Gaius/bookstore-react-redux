import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Books from './Books';
import AddBook from './AddBook';
import { removeBook } from '../redux/books/booksSlice';

const BooksPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div>
      {books.map((book) => (
        <div key={book.item_id}>
          <Books
            title={book.title}
            author={book.author}
            onRemove={() => handleRemoveBook(book.item_id)}
          />
        </div>
      ))}
      <AddBook />
    </div>
  );
};

export default BooksPage;
