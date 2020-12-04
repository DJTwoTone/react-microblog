import React from 'react';
import Routes from './Routes'

// import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App container">
      <header>
        <h1>Blog, Blog, Blog</h1>
        <p>It's time to blog!</p>
        <nav>
          <NavLink exact to='/'>Blog</NavLink>
          <NavLink exact to='/new'>Add a post</NavLink>
        </nav>
      </header>
      <Routes />
    </div>
  );
}

export default App;
