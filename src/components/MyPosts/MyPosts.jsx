import React, { useState } from 'react';
import s from './MyPosts.module.css';
import Post from '../Post/Post';

const MyPosts = () => {
  const [posts, setPosts] = useState([]);

  const [newPostText, setNewPostText] = useState('');

  // Функція для додавання нового поста
  const addPost = () => {
    if (newPostText.trim() === '') return;

    setPosts(prevPosts => [
      { id: prevPosts.length + 1, message: newPostText, likeCount: 0 },
      ...prevPosts, //новий пост
    ]);

    setNewPostText(''); // delete поле після додавання
  };

  const likePost = id => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === id ? { ...post, likeCount: post.likeCount + 1 } : post
      )
    );
  };

  return (
    <div className={s.posts}>
      <h3>My Posts</h3>
      <div>
        <textarea
          autoFocus
          cols={75}
          rows={10}
          value={newPostText}
          onChange={e => setNewPostText(e.target.value)}
          placeholder="Write something..."
        />
      </div>
      <button className={s.posts} onClick={addPost}>Add post</button>{' '}
      {/*Викликаємо addPost тільки при кліку */}
      <div className={s.new_post}>
        {posts.map(post => (
          <Post
            key={post.id}
            message={post.message}
            likeCount={post.likeCount}
            onLike={() => likePost(post.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
