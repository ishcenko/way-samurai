import React from 'react';
import s from './Dialogs.module.css';
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

const Message = ({ message }) => {
  return <div className={s.messages}>{message}</div>;
};

const Dialogs = props => {
  let dialogsData = [
    { id: 1, name: 'Andrii' },
    { id: 2, name: 'Maria' },
    { id: 3, name: 'Mark' },
    { id: 4, name: 'Dmutro' },
    { id: 5, name: 'Stepan' },
    { id: 6, name: 'Anton' },
    { id: 7, name: 'Olga' },
    { id: 8, name: 'Robert' },
    { id: 9, name: 'Oleh' },
  ];
  let messageData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'What' },
    { id: 5, message: 'For you' },
    { id: 6, message: 'Slims' },
    { id: 7, message: 'Stop' },
    { id: 8, message: 'Start' },
    { id: 9, message: 'Apple' },
  ];

  let dialogsElements = dialogsData.map(dialog => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messageElements = messageData.map(message => (
    <Message message={message.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>{dialogsElements}</div>
      <div className={s.messages}>{messageElements}</div>
    </div>
  );
};
export default Dialogs;
