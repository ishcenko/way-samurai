import React from 'react';
import s from './Header.module.css';
const Header = () => {
  return (
    <div>
      <header className={s.header}>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png"
          alt="Logo"
        />
      </header>
    </div>
  );
};

export default Header;
