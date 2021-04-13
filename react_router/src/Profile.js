import React from 'react';
import { Link } from 'react-router-dom';
const Profile = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h1>Hello from Profile</h1>
      <Link to='/'>Home</Link>
    </div>
  );
};

export default Profile;
