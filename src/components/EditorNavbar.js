import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/code.png';
import { PiDownloadSimple } from 'react-icons/pi';

const EditorNavbar = () => {
  return (
    <div className="flex items-center justify-between px-24 h-20 bg-[#141414] text-white">
      {/* Logo Section */}
      <div className="logo">
        <img
          className="w-24 h-20 cursor-pointer object-contain"
          src={img}
          alt="Logo"
        />
      </div>

      {/* File Path */}
      <p>
        File / <span className="text-gray-400">File Name..</span>
      </p>

      {/* Download Icon */}
      <div
        className="p-2 bg-black rounded-md cursor-pointer hover:bg-gray-800 flex items-center justify-center"
        title="Download"
      >
        <PiDownloadSimple size={20} />
      </div>
    </div>
  );
};

export default EditorNavbar;
