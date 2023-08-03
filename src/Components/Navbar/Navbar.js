import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import {AiFillCaretDown} from 'react-icons/ai'
import { Link } from "react-scroll";
import Userlogo from "../../Assests/user1.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "TV Shows",
    },
    {
      id: 3,
      link: "Movies",
    },
    {
      id: 4,
      link: "New & Popular",
    },
    {
      id: 5,
      link: "MyList",
    },
    {
      id: 6,
      link: "Browser by Language",
    },
  ];
  return (
    <div className="flex fixed  mx-auto max-w-9xl px-2 sm:px-6 lg:px-8  w-full   h-16  inset-y-0 left-0  items-center  text-white  topNav  z-10 bg-gradient-to-b from-black to-transparent">
      <div>
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt=""
          
          style={{ height: "40px" }}
        />
      </div>

      <ul className="hidden md:flex text-based">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer  font-medium text-white hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex  justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-white">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer  py-6 text-1xl">
              <Link
                to={link}
                smooth
                duration={500}
                onClick={() => setNav(!nav)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className="ml-auto flex items-center pr-2">
        <div className="mr-4 cursor-pointer">
          <FiSearch  className="h-5 w-5"/>
        </div>
        <div>
            <span>Children</span>
        </div>


        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">View notifications</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>

          <div className="relative ml-3">
            <div>
              <button
                type="button"
                className="relative flex  text-sm focus:outline-none "
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                
                <img
                  className="h-8 w-8 "
                  src={Userlogo}
                  alt=""
                />
                <span>
                    <AiFillCaretDown className="p-1 mt-2 h-5 w-5"/>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
