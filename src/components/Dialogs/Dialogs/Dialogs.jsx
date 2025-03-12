import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from '../DialogItem/DialogItem';
import Message from '../Message/Message';
import state from 'components/redux/state';

const Dialogs = () => {
  const dialogsElements = state.dialogsData.map(dialog => (
    <DialogItem name={dialog.name} key={dialog.id} />
  ));

  const messageElements = state.messageData.map(message => (
    <Message message={message.message} key={message.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>{dialogsElements}</div>
      <div className={s.messages}>{messageElements}</div>
    </div>
  );
};
export default Dialogs;
