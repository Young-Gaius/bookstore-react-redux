import React from 'react';
import Books from './Books';
import AddBook from './AddBook';

const BooksPage = () => (
  <>
    <Books title="Book One" author="Author One" />
    <AddBook />
  </>
);

export default BooksPage;
