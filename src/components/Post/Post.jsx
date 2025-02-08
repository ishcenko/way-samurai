import React from 'react';
import s from './Post.module.css';

const Post = props => {
  //   debugger;
  //   console.log(props.message);
  return (
    <div className={s.item}>
      <img
        src="https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_neytiri_16x9_1098_01_0e7d844a.jpeg?region=420%2C0%2C1080%2C1080"
        alt="Avatar"
        width={64}
      />
      <div> Message: {props.message}</div>
      <div className="btn-like">
        <button>Like {props.likeCount}</button>
      </div>
    </div>
  );
};
export default Post;
