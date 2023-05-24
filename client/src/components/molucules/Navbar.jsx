import React from 'react';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="py-10 bg-white shadow-lg">
      <div className="container mx-auto lg:w-[70%] w-[85%]">
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
