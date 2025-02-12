import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.nav}>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/privacy">Privacy Policy</NavLink>
      </div>
      <div className={s.socialIcons}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </div>
      <p>© 2025 Your Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
