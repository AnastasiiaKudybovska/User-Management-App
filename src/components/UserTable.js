import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';
import '../styles/UserTable.css';

const apiUrl = "https://jsonplaceholder.typicode.com/";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch(`${apiUrl}users/`);
    const data = await response.json();
    setUsers(data);
  };

  const fetchPosts = async () => {
    const response = await fetch(`${apiUrl}posts/`);
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="table_body">
      <div className="table_title">
        <h2>Users</h2>
        <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      </div>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Status</th>
            <th>Location</th>
            <th>Phone</th>
            <th>Contact</th>
            <th>Posts</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <UserRow key={user.id} user={user} posts={posts} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
