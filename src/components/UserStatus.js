import React from 'react';

const UserStatus = ({ isActive }) => {
  return (
    <div>
      <span className={`user_status ${isActive ? 'green' : 'red'}`}></span>
      {isActive ? 'Active' : 'Inactive'}
    </div>
  );
};

export default UserStatus;
