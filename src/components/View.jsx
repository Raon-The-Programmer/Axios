import React from 'react';

function View({ allData }) {
  return (
    <div className="row">
      {allData.map((user) => (
        <div key={user.id} className='card col-12 col-md-4 col-lg-2 m-4 p-4 bg-info'>
          <div className='card-title'>Name: {user.name}</div>
          <div className='card-title'>User Name: {user.username}</div>
          <div className='card-title'>Email: {user.email}</div>
          <div>Phone: {user.phone}</div>
        </div>
      ))}
    </div>
  );
}

export default View;
