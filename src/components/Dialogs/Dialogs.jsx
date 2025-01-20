import React from 'react';
import s from './Dialogs.module.css';
const Dialogs = () => {
  return (
    <div className={s.dialog_wrapper}>
      <div className={s.content}>
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="Home Page"
        />
      </div>
      <div>
        This package simply re-exports everything from react-router to smooth
        the upgrade path for v6 applications. Once upgraded you can change all
        of your imports and remove it from your dependencies:
      </div>
    </div>
  );
};
export default Dialogs;
