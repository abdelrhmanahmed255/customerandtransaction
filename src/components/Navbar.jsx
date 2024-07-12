import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gray-400 hover:bg-gray-600 text-white fixed right-0 left-0 top-0">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="flex justify-center items-center h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="hover:bg-gray-800 px-3 py-2 text-white rounded-md hover:text-white font-bold text-xl">Home</a>
          </div>
          <div className=" sm:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#customertable"
                className="hover:bg-gray-800 px-3 py-2 text-white rounded-md hover:text-white font-medium text-xl"
              >
                 Table
              </a>
              <a
                href="#transactionsgraph"
                className="hover:bg-gray-800 px-3 py-2 text-white rounded-md hover:text-white  font-medium text-xl"
              >
                 Graph
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
