import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

function generateRandomId(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';

  for (let i = 0; i < length; i += 1) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }

  return id;
}

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/IlUbvHHtHUdawBVeFkE9/books';

const initialState = {
  book: [],
  isLoading: false,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch books');
  }
});

export const addBook = createAsyncThunk('books/addBook', async (newBookData) => {
  try {
    const newBook = {
      item_id: generateRandomId(10),
      ...newBookData,
    };

    await axios.post(baseURL, newBook);
  } catch (error) {
    console.error('Error posting book:', error);
    throw error;
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (item_id) => {
  try {
    await axios.delete(`${baseURL}/${item_id}`);
  } catch (error) {
    console.error('Error removing book:', error);
    throw error;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const booksData = action.payload;

        const booksArray = Object.keys(booksData).map((item_id) => ({
          item_id,
          ...booksData[item_id][0],
        }));

        return {
          ...state,
          isLoading: false,
          book: booksArray,
        };
      })

      .addCase(fetchBooks.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(addBook.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(addBook.fulfilled, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(addBook.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(removeBook.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(removeBook.fulfilled, (state, action) => {
        const itemIdToRemove = action.payload;
        return {
          ...state,
          isLoading: false,
          book: state.book.filter((book) => book.item_id !== itemIdToRemove),
        };
      })
      .addCase(removeBook.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default booksSlice.reducer;
