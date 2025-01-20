import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? `${s.item} ${s.active}` : s.item
          }
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogs"
          className={({ isActive }) =>
            isActive ? `${s.item} ${s.active}` : s.item
          }
        >
          Dialogs
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive ? `${s.item} ${s.active}` : s.item
          }
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          className={({ isActive }) =>
            isActive ? `${s.item} ${s.active}` : s.item
          }
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? `${s.item} ${s.active}` : s.item
          }
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
