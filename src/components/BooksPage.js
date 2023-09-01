import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Books from './Books';
import AddBook from './AddBook';
import { removeBookAsync, fetchBooks } from '../redux/books/booksSlice';

const BooksPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const status = useSelector((state) => state.books.status);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleRemoveBook = async (itemId) => {
    await dispatch(removeBookAsync(itemId));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {books.map((book) => (
        <div key={book.item_id}>
          <Books
            title={book.title}
            author={book.author}
            category={book.category}
          />
          <button type="button" onClick={() => handleRemoveBook(book.item_id)}>Remove</button>
        </div>
      ))}
      <AddBook />
    </div>
  );
};

export default BooksPage;
