import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="navbar flex items-center justify-end px-[100px] h-[80px] bg-[#000000] text-[#ffffff] mr-auto">
        <div className="links flex items-center gap-2">
          <Link to="/">Home</Link>
          <Link to="/code">Code</Link>
          <Link to="/services">Projects</Link>
          <Link to="/Editor">Editor</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
