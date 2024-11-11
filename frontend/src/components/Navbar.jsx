import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sticky, setSticky] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const properties = [
    { id: 1, name: "Comfort Home" },
    { id: 2, name: "2BHK Villa" },
    { id: 3, name: "Modern Haven" },
    { id: 4, name: "Cozy Retreat" },
    { id: 5, name: "3BHK Villa" },
    { id: 6, name: "Spacious Residence" },
  ];

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleSearchSubmit = () => {
    const matchedProperty = properties.find((property) =>
      property.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    matchedProperty
      ? navigate(`/card/${matchedProperty.id}`)
      : alert("Property not found");
  };

  const navItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/course">Explore</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about">About</Link></li>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50 ${
        sticky ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 duration-300 transition-all ease-in-out" : ""
      }`}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <a className="text-2xl font-bold cursor-pointer">EstateX</a>
        </div>

        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <input
              type="text"
              className="border rounded-md px-3 py-2 outline-none dark:bg-slate-900 dark:text-white"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button
              className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300"
              onClick={handleSearchSubmit}
            >
              Search
            </button>
          </div>

          <label className="swap swap-rotate">
            <input type="checkbox" checked={theme === "dark"} onChange={() => setTheme(theme === "dark" ? "light" : "dark")} />
            <svg
              className="swap-off fill-current w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 4V1M12 23v-3M4 12H1m23 0h-3M5.22 5.22l-1.42-1.42M18.36 18.36l-1.42-1.42M5.22 18.36l1.42 1.42M18.36 5.22l1.42 1.42M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" />
            </svg>
            <svg
              className="swap-on fill-current w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2a9.94 9.94 0 0 0-3 .44c1.15 1.95 1.16 4.38.05 6.32-1.14-1.06-2.77-1.5-4.29-1.29a5.9 5.9 0 0 0-1.68 1.55 5.91 5.91 0 0 0 .16 6.99c-.44-.25-.91-.47-1.41-.69 1.91 4.52 7.64 5.83 11.75 3.92 2.99-1.6 4.49-5.32 3.63-8.32-1.24-.62-2.65-.94-4.1-1.05-.24-2.52-2.26-4.51-4.89-4.51z" />
            </svg>
          </label>

          {authUser ? (
            <Logout />
          ) : (
            <div className="hidden md:flex">
              <a
                className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </a>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
