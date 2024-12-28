import React from "react";
import { Link } from "react-router-dom";

const HomeNavbar = () => (
  <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
    <h1 className="text-xl font-bold">KODEit</h1>
    <div className="flex gap-4">
      <Link to="/login" className="hover:underline">Login</Link>
      <Link to="/signup" className="hover:underline">Sign Up</Link>
      <Link to="/editor" className="hover:underline">Editor</Link>
    </div>
  </nav>
);

export default HomeNavbar;
