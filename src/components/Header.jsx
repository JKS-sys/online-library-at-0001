import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <nav className="header-nav">
          <Link to="/" className="logo">
            <div className="logo-icon">OL</div>
            <span className="logo-text">Online Library</span>
          </Link>
          <div className="nav-links">
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/browse"
              className={`nav-link ${
                location.pathname === "/browse" ? "active" : ""
              }`}
            >
              Browse Books
            </Link>
            <Link
              to="/add-book"
              className={`nav-link ${
                location.pathname === "/add-book" ? "active" : ""
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
