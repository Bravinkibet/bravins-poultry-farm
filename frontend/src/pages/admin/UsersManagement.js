// src/pages/Users.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/admin/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const addUser = () => {
    axios.post('http://127.0.0.1:5000/users', newUser)
      .then(response => setUsers([...users, response.data]))
      .catch(error => console.error('Error adding user:', error));
  };

  return (
    <div className="admin-content">
      <h2>Users Management</h2>
      <input type="text" placeholder="Name" onChange={(e) => setNewUser({...newUser, name: e.target.value})} />
      <input type="email" placeholder="Email" onChange={(e) => setNewUser({...newUser, email: e.target.value})} />
      <button onClick={addUser}>Add User</button>
      <ul>{users.map(user => (<li key={user.id}>{user.name} - {user.email}</li>))}</ul>
    </div>
  );
};

export default Users;

