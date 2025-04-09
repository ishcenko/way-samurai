import React, { useState } from 'react';
import s from './Post.module.css';

const Post = ({ message, likeCount, onLike }) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={s.item}>
      <div className={s.avatar_container}>
        <img
          src={
            image ||
            'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='
          }
          width={120}
          height={120}
          alt="Avatar"
          className={s.avatar}
        />
        {/* SVG-іконка для завантаження фото */}
        <label className={s.upload_icon}>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 16v-8M8 12l4-4 4 4M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
          </svg>
        </label>
      </div>

      <div className={s.message}>{message}</div>
      <div className={s.btn_like}>
        <button className={s.button_like} onClick={onLike}>
          Like: <span className={s.like_number}>{likeCount}</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
