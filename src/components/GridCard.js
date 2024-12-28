import React from 'react';
import img from '../images/code.png';
import deleteimg from '../images/delete.png';
import { useState } from 'react';
const GridCard = () => {
    const [isDeleted, setisDeleted] = useState(false);
  
  return (
    <div className="gridcard bg-[#141414] cursor-pointer rounded-lg hover:bg-[#202020] shadow-lg p-4">
   
      <img
        src={img}
        alt="Project"
        className="w-20 h-20 object-cover rounded-md mb-4"
      />
  
      <div className="text-white">
        <h3 className="text-lg font-semibold mb-2">Project 1</h3>
        <p className="text-sm text-gray-400 mb-4">
          A brief description of the project goes here.
        </p>
       
        <div className="flex justify-end">
          <img
            onClick={()=>{setisDeleted(true)}}
            src={deleteimg}
            alt="Delete"
            className="w-6 h-6 cursor-pointer hover:opacity-80"
          />
        </div>
      </div>
      {isDeleted && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
          <div className="bg-[#141414] rounded-lg p-6 w-96">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Do you want to delete this project?
            </h3>
            <div className="flex justify-between">
              <button
                onClick={() => {
                  alert('Project Deleted!');
                  setisDeleted(false);
                }}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-[48%]"
              >
                Delete
              </button>
              <button
                onClick={() => setisDeleted(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 w-[48%]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GridCard;
