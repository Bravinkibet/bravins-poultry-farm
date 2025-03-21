// src/pages/admin/UsersManagement.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/AdminUsers.css";

const UsersManagement = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleAddUser = async () => {
    const name = prompt("Enter user name:");
    const email = prompt("Enter user email:");
    const phone = prompt("Enter user phone:");
    const location = prompt("Enter user location:");
    if (name && email && phone && location) {
      try {
        await axios.post("http://127.0.0.1:5000/users", { name, email, phone, location });
        fetchUsers();
      } catch (error) {
        console.error("Error adding user:", error);
      }
    }
  };

  const handleEditUser = async (user) => {
    const newName = prompt("Edit user name:", user.name);
    const newEmail = prompt("Edit user email:", user.email);
    const newPhone = prompt("Edit user phone:", user.phone);
    const newLocation = prompt("Edit user location:", user.location);
    if (newName && newEmail && newPhone && newLocation) {
      try {
        await axios.put(`http://127.0.0.1:5000/users/${user.id}`, { name: newName, email: newEmail, phone: newPhone, location: newLocation });
        fetchUsers();
      } catch (error) {
        console.error("Error editing user:", error);
      }
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://127.0.0.1:5000/users/${userId}`);
        fetchUsers();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  const filteredUsers = users.filter(user =>
    Object.values(user).some(val => val.toString().toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="users-management-page">
      <h1>Users Management</h1>
      <button onClick={handleAddUser}>Add User</button>
      <input
        type="text"
        placeholder="Search users..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.location}</td>
              <td>
                <button onClick={() => handleEditUser(user)}>Edit</button>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersManagement;
