import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categorySlice';

const allReducers = {
  books: booksReducer,
  categories: categoriesReducer,
};

const store = configureStore({
  reducer: allReducers,
});

export default store;
