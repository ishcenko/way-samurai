import React from 'react';
import s from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <a className={`${s.item} ${s.active}`} href="#s">
          Profile
        </a>
      </div>
      <div>
        <a className={s.item} href="#s">
          Message
        </a>
      </div>
      <div>
        <a className={s.item} href="#s">
          News
        </a>
      </div>
      <div>
        <a className={s.item} href="#s">
          Music
        </a>
      </div>
      <div>
        <a className={s.item} href="#s">
          Setting
        </a>
      </div>
    </nav>
  );
};
export default NavBar;
