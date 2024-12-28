import React, { useState } from 'react';
import ListCard from '../components/ListCard';
import GridCard from '../components/GridCard';

const Code = ({ userName = "Nishant" }) => {
  const [isGridLayout, setGridLayout] = useState(false);

  const [isCreateModal, setIsCreateModal] = useState(false);

  return (
    <div className="container mx-auto p-5">
      {/* Header Section */}
      <div className="flex items-center justify-between px-24 my-10">
        <h2 className="text-2xl mt-2 text-black">Hi {userName}</h2>
        <div className="flex items-center gap-2">
          <div className="inputBox flex items-center">
            <input
              type="text"
              placeholder="Search here..."
              className="bg-gray-800 text-white h-10 w-80 px-3 border border-gray-600 rounded-sm focus:outline-none"
            />
            <button onClick={()=>{setIsCreateModal(true)}} className="btnBlue rounded px-3 py-2 bg-blue-500 text-white hover:bg-blue-600">
              +
            </button>
          </div>
        </div>
      </div>

      {/* Toggle Layout Buttons */}
      <div className="flex justify-end mb-5">
        <button
          onClick={() => setGridLayout(false)}
          className={`px-4 py-2 mr-2 rounded ${
            !isGridLayout ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          List View
        </button>
        <button
          onClick={() => setGridLayout(true)}
          className={`px-4 py-2 rounded ${
            isGridLayout ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Grid View
        </button>
      </div>

      {/* Cards Section */}
      <div className="cards">
        {isGridLayout ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
          </div>
        ) : (
          <div className="list flex flex-col gap-4">
            <ListCard />
            <ListCard />

            <ListCard />
            <ListCard />
          </div>
        )}
      </div>
      {isCreateModal && (
        <div className="fixed inset-0 bg-[rgba(27,27,27,0.5)] flex items-center justify-center z-50">
          <div className="bg-[#141414] rounded-lg p-6 w-96">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Create New Project
            </h3>
            <input
              type="text"
              placeholder="Project Title"
              className="w-full px-4 py-2 mb-4 bg-[#202020] text-white rounded focus:outline-none"
            />
            <div className="flex justify-between">
              <button
                onClick={() => alert('Project created!')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-[48%]"
              >
                Create
              </button>
              <button
                onClick={() => setIsCreateModal(false)}
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

export default Code;
