import React, { useState } from 'react';
import s from './MyPosts.module.css';
import Post from '../Post/Post';

const MyPosts = () => {
  const [posts, setPosts] = useState([]);

  const [newPostText, setNewPostText] = useState('');

  // ✅ Функція для додавання нового поста
  const addPost = () => {
    if (newPostText.trim() === '') return; // Запобігаємо додаванню пустого поста

    setPosts(prevPosts => [
      { id: prevPosts.length + 1, message: newPostText, likeCount: 0 },
      ...prevPosts, // Додаємо новий пост на початок списку
    ]);

    setNewPostText(''); // Очищаємо поле після додавання
  };

  return (
    <div className={s.posts}>
      <h3>My Posts</h3>
      <div>
        <textarea
          value={newPostText}
          onChange={e => setNewPostText(e.target.value)}
          placeholder="Write something..."
        />
      </div>
      <button onClick={addPost}>Add post</button>{' '}
      {/* ✅ Викликаємо addPost тільки при кліку */}
      <div className="new-post">
        {posts.map(post => (
          <Post
            key={post.id}
            message={post.message}
            likeCount={post.likeCount}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
