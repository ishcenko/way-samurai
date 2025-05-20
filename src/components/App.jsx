import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs/Dialogs';
import Music from './Music/Music';

import Footer from './Footer/Footer';
import './App.css';
import News from './News/News';
import Settings from './Settings/Settings';

export const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="wrapper">
        <NavBar />
        <div className="app-wrapper-content">
          <Routes>
            <Route index element={<Profile />} /> {/* Головна сторінка */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs" element={<Dialogs />} />
            <Route path="/music" element={<Music />} />
            <Route path="/news" element={<News />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};
