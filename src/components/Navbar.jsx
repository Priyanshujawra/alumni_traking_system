import React, { memo } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const navData = [
    { id: 1, name: "about", path: "/about" },
    { id: 2, name: "Student to Jobs", path: "/jobs" },
    { id: 3, name: "Events", path: "/Recent_event_set" },
    { id: 4, name: "Gallery", path: "/gallery" },
  ];

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-white shadow-xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Um565hKpUdZ3g5jtTpWJUTXCnBI4teEk9w&s"
              className=" h-16"
              alt="glocal Logo"
            />
            <span className="self-center text-xl font-semibold w-[135px] ">
              Glocal Alumni Association
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link to="/login_A">
              <button
                type="button"
                className=" bg-blue-700 hover:bg-blue-800 focus:ring-4 text-base dark:text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login / Sign up
              </button>
            </Link>

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium  capitalize p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              {navData.map((data, i) => (
                <li key={data.id}>
                  <Link
                    to={data.path}
                    className="  block py-2 px-3 md:p-0  text-gray-900 rounded hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default memo(Navbar);
