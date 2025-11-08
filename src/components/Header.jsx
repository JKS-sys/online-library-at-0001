import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Online Library
          </Link>
          <div className="space-x-6">
            <Link
              to="/"
              className={`hover:text-blue-200 transition-colors ${
                location.pathname === "/" ? "text-blue-200 font-semibold" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/browse"
              className={`hover:text-blue-200 transition-colors ${
                location.pathname === "/browse"
                  ? "text-blue-200 font-semibold"
                  : ""
              }`}
            >
              Browse Books
            </Link>
            <Link
              to="/add-book"
              className={`hover:text-blue-200 transition-colors ${
                location.pathname === "/add-book"
                  ? "text-blue-200 font-semibold"
                  : ""
              }`}
            >
              Add Book
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
