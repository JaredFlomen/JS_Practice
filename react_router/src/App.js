import React from 'react';
import { Link } from 'react-router-dom';
const App = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h1>Hello From App</h1>
      <Link to='/profile'>Profile</Link>
    </div>
  );
};

export default App;
