import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.posts}>
      My posrs
      <div>
        New post
        <Post message="Hi, how are you" />
        <Post message="It's my first post" />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
export default MyPosts;
