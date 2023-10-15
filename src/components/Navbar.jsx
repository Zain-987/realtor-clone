import React from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="bg-gray-100">
      <nav className="max-w-5xl mx-auto flex justify-between items-center p-3">
        <Link to={"/"}>
          {" "}
          <h2 className="text-gray-400 font-semibold text-3xl">
            POP<span className="text-gray-600">STATE</span>
          </h2>
        </Link>
        <form className="flex items-center bg-gray-50 p-3 rounded md:w-[250px] w-[150px]">
          <input
            placeholder="Search..."
            className="bg-gray-50 outline-none w-full mr-2"
          />
          <BiSearch size={24} />
        </form>

        <ul className="md:flex hidden items-center space-x-6 text-lg ">
          <li className="hover:underline ">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:underline">
            <Link to={"/profile"}>Profile</Link>
          </li>
          <li className="hover:underline">
            <Link to={"/register"}>SignUp</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
