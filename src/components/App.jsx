import React from 'react';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Profile from './Profile/Profile';
import './App.css';
import Dialogs from './Dialogs/Dialogs';

export const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="wrapper">
        <NavBar />
        <div className="app-wrapper-content">
          <Profile />
          <Dialogs />
        </div>
      </div>
    </div>
  );
};
