import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";

const BrowseBooks = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.books);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter books by category and search term
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
    <div className="container mx-auto px-4 py-8">
      {/* Header and Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4 md:mb-0">
          {category ? `${category} Books` : "Browse All Books"}
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          {/* Category Filter */}
          <select
            value={category || ""}
            onChange={(e) => {
              if (e.target.value) {
                navigate(`/books/${e.target.value}`);
              } else {
                navigate("/browse");
              }
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat.toLowerCase()}>
                {cat}
              </option>
            ))}
          </select>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
          />
        </div>
      </div>

      {/* Books Grid */}
      {filteredBooks.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No books found matching your criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {book.title}
                </h3>
                <p className="text-gray-600 mb-2">by {book.author}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {book.category}
                  </span>
                  <span className="text-yellow-500 font-semibold">
                    ⭐ {book.rating}
                  </span>
                </div>
                <Link
                  to={`/book/${book.id}`}
                  className="block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseBooks;
