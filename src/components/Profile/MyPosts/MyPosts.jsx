import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.posts}>
      My posts
      <div>
        <input />
      </div>
      <button>Add post</button>
      <div className="new-post">
        New post
        <Post message="Hi, how are you" likeCount="20" />
        <Post message="It's my first post" likeCount="23" />
        <Post message="It's my first post" likeCount="25" />
        <Post message="It's my first post" likeCount="27" />
        <Post message="It's my first post" likeCount="29" />
        <Post message="It's my first post" likeCount="21" />
        <Post message="It's my first post" likeCount="20" />
      </div>
    </div>
  );
};
export default MyPosts;
