import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";

const BrowseBooks = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.books);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = useMemo(() => {
    let filtered = books;

    if (category) {
      filtered = filtered.filter(
        (book) => book.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [books, category, searchTerm]);

  const categories = [...new Set(books.map((book) => book.category))];

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {category ? `${category} Books` : "Browse All Books"}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {category
              ? `Discover our curated selection of ${category.toLowerCase()} books`
              : "Explore our complete library collection"}
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="filter-section">
          <div className="filter-content">
            {/* Category Filter */}
            <div className="filter-group">
              <label className="filter-label">Filter by:</label>
              <select
                value={category || ""}
                onChange={(e) => {
                  if (e.target.value) {
                    navigate(`/books/${e.target.value}`);
                  } else {
                    navigate("/browse");
                  }
                }}
                className="form-select w-full md:w-48"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat.toLowerCase()}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Bar */}
            <div className="search-container">
              <input
                type="text"
                placeholder="Search by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <div className="search-icon">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        {filteredBooks.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📚</div>
            <h3 className="empty-title">No books found</h3>
            <p className="empty-description">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                navigate("/browse");
              }}
              className="btn btn-primary"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <div key={book.id} className="card card-hover book-card">
                <div className="book-card-content">
                  <div className="book-card-header">
                    <span
                      className={`book-badge badge-${book.category
                        .toLowerCase()
                        .replace("-", "")}`}
                    >
                      {book.category}
                    </span>
                    <div className="rating">
                      <span>⭐</span>
                      <span>{book.rating}</span>
                    </div>
                  </div>

                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">by {book.author}</p>
                  <p className="book-description">{book.description}</p>
                </div>

                <div className="book-card-footer">
                  <Link
                    to={`/book/${book.id}`}
                    className="btn btn-primary btn-full justify-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
