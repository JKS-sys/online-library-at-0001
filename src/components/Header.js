import React, { use } from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Online Library
          </Link>
          <div className="space-x-4">
            <Link
              to="/"
              className={`hover:underline ${
                location.pathname === "/" ? "font-semibold" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/browse"
              className={`hover:underline ${
                location.pathname.startsWith("/browse") ||
                location.pathname.startsWith("/books")
                  ? "font-semibold"
                  : ""
              }`}
            >
              Browse Books
            </Link>
            <Link
              to="/add-book"
              className={`hover:underline ${
                location.pathname === "/add-book" ? "font-semibold" : ""
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
