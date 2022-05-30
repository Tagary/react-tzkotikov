import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import FavoritePages from './pages/FavoritePages';
import MainPages from './pages/MainPages';
import './css/style.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path="" element={<MainPages />} />

        <Route path="/favorite" element={<FavoritePages />} />
      </Routes>
    </div>
  );
}

export default App;
