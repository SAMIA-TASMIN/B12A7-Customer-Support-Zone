import React from "react";

const Navbar = () => {
  return (
    <div className="w-full shadow-sm bg-base-100">
      <div className="navbar max-w-7xl mx-auto px-4">

        {/* LEFT - Logo */}
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">CS Ticket System</a>
        </div>

        {/* RIGHT Mobile Menu Button */}
        <div className="flex-none lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>

        {/* DESKTOP MENU */}
        <div className="flex-none hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center">
            <li><a>Link</a></li>
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>

            <button className="btn bg-[#422AD5] text-white ml-4">
              + New Ticket
            </button>
          </ul>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0}></label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[999] p-4 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Link</a></li>
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>

            <button className="btn bg-[#422AD5] text-white mt-2">
              + New Ticket
            </button>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
