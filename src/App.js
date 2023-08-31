import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Category from './components/Category';
import Navbar from './components/Navigation';
import BooksPage from './components/BooksPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
