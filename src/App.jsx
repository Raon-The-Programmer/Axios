import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes, useParams } from 'react-router-dom';

import ReadData from './component/ReadData';
import CreateUser from './component/CreateUser';
import DeleteUser from './component/DeleteUser';
import EditUser from './component/EditUser';

function App() {
  const [allData, setAllData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setAllData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  

  return (
    <Router>
      <div>
        <Link to='/' className='m-4'>Read Data</Link>
        <Link to='/create' className='m-4'>Create New User</Link>
        <Link to='/delete' className='m-4'>Delete User</Link> 
        <Link to='/edit' className='m-4'>
          Edit User
        </Link>
      </div>
      <Routes>
        <Route path='/' element={<ReadData allData={allData} />} />
        <Route path='/create' element={<CreateUser allData={allData} setAllData={setAllData} />} />
        <Route path='/delete' element={<DeleteUser allData={allData} setAllData={setAllData} />} />
        <Route path='/edit' element={<EditUser allData={allData} setAllData={setAllData} />} />
          
      </Routes>
    </Router>
  );
}

export default App;
