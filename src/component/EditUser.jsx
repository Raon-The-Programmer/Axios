import React, { useState } from 'react';

function EditUser({ allData, setAllData }) {
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUser, setEditedUser] = useState({ name: '', username: '', email: '', phone: '' });

  const handleEdit = (user) => {
    setEditingUserId(user.id);
    setEditedUser({
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = () => {
   
    const updatedData = allData.map((user) => {
      if (user.id === editingUserId) {
        return { ...user, ...editedUser };
      }
      return user;
    });

    
    setAllData(updatedData);

    setEditingUserId(null);
    setEditedUser({ name: '', username: '', email: '', phone: '' });
  };

  return (
    <div>
      <div>
        {allData.map((user) => (
          <div key={user.id} className='card m-4 p-4'>
            {editingUserId === user.id ? (
              <div>
                <label>Name:</label>
                <input
                  type='text'
                  name='name'
                  value={editedUser.name}
                  onChange={handleChange}
                />
                <label>User Name:</label>
                <input
                  type='text'
                  name='username'
                  value={editedUser.username}
                  onChange={handleChange}
                />
                <label>Email:</label>
                <input
                  type='text'
                  name='email'
                  value={editedUser.email}
                  onChange={handleChange}
                />
                <label>Phone:</label>
                <input
                  type='text'
                  name='phone'
                  value={editedUser.phone}
                  onChange={handleChange}
                />
                <button className='m-4' onClick={handleSave}>
                  Save
                </button>
              </div>
            ) : (
              <div>
                <div className='card-title'>Name: {user.name}</div>
                <div className='card-title'>User Name: {user.username}</div>
                <div className='card-title'>Email: {user.email}</div>
                <div>Phone: {user.phone}</div>
                <button className='m-4' onClick={() => handleEdit(user)}>
                  Edit
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditUser;
