import React from 'react';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Profile from './Profile/Profile';
import './App.css';
import Dialogs from './Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer/Footer';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="wrapper">
          <NavBar />
          <div className="app-wrapper-content">
            <Routes>
              <Route exact path="dialogs" element={<Dialogs />} />
              <Route path="profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};
