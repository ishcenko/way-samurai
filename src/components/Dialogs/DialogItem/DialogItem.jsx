import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ name, id }) => {
  let path = '/dialogs/' + id;
  return (
    <div className={s.dialog}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${s.dialog} ${s.active}` : s.dialog
        }
        to={path}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
