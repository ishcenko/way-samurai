import React from 'react';
import s from './Post.module.css';

const Post = ({ message, likeCount, onLike }) => {
  return (
    <div className={s.item}>
      <img
        src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
        alt="Avatar"
        width={64}
      />
      <div> {message}</div>
      <div className="btn-like">
        <button onClick={onLike}>
          Like: <span className={s.like_number}>{likeCount}</span>
        </button>
      </div>
    </div>
  );
};
export default Post;
