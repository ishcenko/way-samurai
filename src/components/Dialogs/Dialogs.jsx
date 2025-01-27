import React from 'react';
import s from './Dialogs.module.css';
const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
        <div className={s.dialog}>Andrii</div>
        <div className={s.dialog}>Maria</div>
        <div className={s.dialog}>Mark</div>
        <div className={s.dialog}>Dmutro</div>
        <div className={s.dialog}>Stepan</div>
        <div className={s.dialog}>Anton</div>
        <div className={s.dialog}>Olga</div>
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
