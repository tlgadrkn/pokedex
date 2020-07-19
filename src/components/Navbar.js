import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-center flex-wrap bg-blue-200 p-6 text-center">
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-4">
          Get Random Pokemon
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
