import React, { useState } from "react";
import Sidebar from "./SidebarAdmin";
// import "./UserList.css";

interface User {
  id: number;
  name: string;
  phone: string;
  role: "admin" | "user";
}

const initialUsers: User[] = [
  { id: 1, name: "Admin 1", phone: "0123456789", role: "admin" },
  { id: 2, name: "Admin 2", phone: "0987654321", role: "admin" },
  { id: 3, name: "User 1", phone: "0123123123", role: "user" },
  { id: 4, name: "User 2", phone: "0456456456", role: "user" },
  { id: 5, name: "User 3", phone: "0789789789", role: "user" },
];

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const toggleUserSelection = (userId: number) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(userId)
        ? prevSelected.filter((id) => id !== userId)
        : [...prevSelected, userId]
    );
  };

  const deleteSelectedUsers = () => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => !selectedUsers.includes(user.id))
    );
    setSelectedUsers([]);
  };

  return (
    <div className="user-list-container custom-list-bar">
      <Sidebar />
      <h2 className="user-list-title">Danh sách người dùng</h2>
      <div className="user-lists">
        <div className="user-list admin-list">
          <h2>Admin/Quản lý</h2>
          <ul>
            {users
              .filter((user) => user.role === "admin")
              .map((user) => (
                <li key={user.id}>
                  <span>{user.name}</span>
                  <span>{user.phone}</span>
                </li>
              ))}
          </ul>
        </div>
        <div className="user-list customer-list">
          <h2>Khách hàng</h2>
          <ul>
            {users
              .filter((user) => user.role === "user")
              .map((user) => (
                <li key={user.id}>
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => toggleUserSelection(user.id)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <span>{user.name}</span>
                  <span>{user.phone}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <button
        className="delete-button"
        onClick={deleteSelectedUsers}
        disabled={selectedUsers.length === 0}
      >
        Xóa người dùng đã chọn
      </button>
    </div>
  );
};

export default UserList;
