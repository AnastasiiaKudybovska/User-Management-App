import React, { useState } from 'react';
import UserPosts from './UserPosts';
import UserStatus from './UserStatus';

const UserRow = ({ user, posts }) => {
  const [showPosts, setShowPosts] = useState(false);

  const userPosts = posts.filter((post) => post.userId === user.id);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const iconColor = getRandomColor();

  return (
    <>
      <tr>
        <td>
          <div className="icon-circle" style={{ backgroundColor: iconColor}}>
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
          <strong>{user.name}</strong>
          <div className='username'>@{user.username}</div>
        </td>
        <td>
          <UserStatus isActive={userPosts.length > 0} />
        </td>
        <td>{user.address.city}</td>
        <td>{user.phone}</td>
        <td style={{textAlign:"center"}}><button className="contact_btn">Contact</button></td>
        <td style={{ textAlign: "center" }}>
          <button className="view_btn" onClick={() => setShowPosts(!showPosts)}>
            {showPosts ? 'Hide all' : `View all`} ({userPosts.length})
          </button>
        </td>

      </tr>
      {showPosts && (
        <tr>
          <td colSpan="6">
            <UserPosts posts={userPosts} />
          </td>
        </tr>
      )}
    </>
  );
};

export default UserRow;
