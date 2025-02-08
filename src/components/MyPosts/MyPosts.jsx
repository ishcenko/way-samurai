import React from 'react';
import s from './MyPosts.module.css';
import Post from '../Post/Post';

const MyPosts = () => {
  let posts = [
    { id: 1, message: 'Hi, how are you', likeCount: '27' },
    { id: 2, message: "It's my first post", likeCount: '35' },
    { id: 3, message: 'Hi, how are you', likeCount: '23' },
    { id: 4, message: "It's my first post", likeCount: '43' },
  ];

  let postsElements = posts.map(post => (
    <Post message={post.message} likeCount={post.likeCount} />
  ));

  return (
    <div className={s.posts}>
      <h3>My post</h3>
      <div>
        <textarea />
      </div>
      <button>Add post</button>
      <div className="new-post">
        New post
        {postsElements}
      </div>
    </div>
  );
};
export default MyPosts;
