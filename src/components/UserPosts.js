import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const UserPosts = ({ posts }) => {
  const formatDate = () => {
    const date = new Date();

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
};
  return (
    <ul className="post_list">
      <h2>Posts</h2>
      {posts.map((post) => (
        <li key={post.id}  className="post-item">
          <h3>{post.title}</h3>
          <div>
            <p className='post-body'>{post.body}</p>
            <p ><FontAwesomeIcon icon={faCalendarAlt} /> Date: {formatDate()}</p>
          </div>
        </li>
 
      ))}
    </ul>
  );
};

export default UserPosts;
