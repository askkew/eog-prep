import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './features/blog/Blog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index path="home" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="counter" element={<Counter />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;