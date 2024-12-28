import React, { useState } from 'react';
import img from '../images/code.png';
import deleteimg from '../images/delete.png';

const ListCard = () => {
  const [isDeleted, setisDeleted] = useState(false);

  return (
    <div className="listcard w-full flex items-center justify-between p-5 bg-[#141414] cursor-pointer rounded-lg hover:bg-[#202020]">
      {/* Card Content */}
      <div className="flex items-center gap-4">
        {/* Project Image */}
        <img src={img} alt="Project" className="w-[80px] h-[80px] object-cover rounded-md" />

        {/* Project Details */}
        <div>
          <h3 className="text-[20px] text-white font-semibold">Project 1</h3>
          <p className="text-gray-400 text-sm">A brief description of the project.</p>
        </div>
      </div>

      {/* Delete Icon */}
      <img
        onClick={() => setisDeleted(true)}
        src={deleteimg}
        alt="Delete"
        className="w-6 h-6 cursor-pointer hover:opacity-80"
      />

      {/* Deletion Modal */}
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

export default ListCard;
