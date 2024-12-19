import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Content from './Content';
import './App.css';

export const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Content />
    </div>
  );
};
