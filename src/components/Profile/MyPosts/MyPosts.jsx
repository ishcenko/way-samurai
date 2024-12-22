import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div>
      My posrs
      <div>
        New post
        <div className={s.posts}>post1</div>
        <div className={s.posts}>post2</div>
      </div>
    </div>
  );
};
export default MyPosts;
