import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import styled from '@emotion/styled';

const NavBar = styled('nav')({
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: 'rgb(34,37,45)',
  padding: '0px 60px 0px 60px',
})

const NavButton = styled('a')({
  margin: '10px',
  color: 'gainsboro',
  textDecoration: 'none',
  '&:hover': {
    color: 'white',
    cursor: 'pointer',
  }
})

function App() {
  return (
    <div className="App">
      <NavBar>
        <NavButton href="/counter">Counter App</NavButton>
        <NavButton href="/">Shopping List</NavButton>
        <NavButton href="/">Task Manager</NavButton>
      </NavBar>
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
