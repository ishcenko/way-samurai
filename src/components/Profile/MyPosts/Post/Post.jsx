import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img
        src="https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_neytiri_16x9_1098_01_0e7d844a.jpeg?region=420%2C0%2C1080%2C1080"
        alt="Avatar"
        width={64}
      />
      post
      <div>
        <button>Like</button>
      </div>
    </div>
  );
};
export default Post;
