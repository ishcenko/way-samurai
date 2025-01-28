import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (name, id) => {
  let path = '/dialogs/' + id;
  return (
    <div>
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
    </div>
  );
};

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
        <DialogItem name="Andrii" id="1" />
        <DialogItem name="Maria" id="2" />
        <DialogItem name="Mark" id="3" />
        <DialogItem name="Dmutro" id="4" />
        <DialogItem name="Stepan" id="5" />
        <DialogItem name="Anton" id="6" />
        <DialogItem name="Olga" id="7" />
        <DialogItem name="Robert" id="8" />
        <DialogItem name="Oleh" id="9" />
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Hello</div>
        <div className={s.message}>Yo</div>
        <div className={s.message}>What</div>
        <div className={s.message}>For you</div>
        <div className={s.message}>Slims</div>
        <div className={s.message}>Stop</div>
      </div>
    </div>
  );
};
export default Dialogs;
