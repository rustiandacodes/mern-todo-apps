import React from 'react';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="p-10 bg-white shadow-lg">
      <div className="mx-auto container">
        <span
          className="text-3xl font-extrabold cursor-pointer"
          onClick={() => {
            navigate('/');
          }}
        >
          Todo Apps
        </span>
      </div>
    </header>
  );
};

export default Navbar;
