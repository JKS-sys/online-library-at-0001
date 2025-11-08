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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {category ? `${category} Collection` : "Browse All Books"}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {category
              ? `Discover our curated selection of ${category.toLowerCase()} books`
              : "Explore our complete library collection"}
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex items-center space-x-4 w-full lg:w-auto">
              <label className="text-gray-700 font-medium whitespace-nowrap">
                Filter by:
              </label>
              <select
                value={category || ""}
                onChange={(e) => {
                  if (e.target.value) {
                    navigate(`/books/${e.target.value}`);
                  } else {
                    navigate("/browse");
                  }
                }}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full lg:w-48"
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
            <div className="relative w-full lg:w-96">
              <input
                type="text"
                placeholder="Search by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
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
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              No books found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                navigate("/browse");
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <div key={book.id} className="card-hover group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-full flex flex-col">
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          book.category === "Fiction"
                            ? "bg-blue-100 text-blue-800"
                            : book.category === "Sci-Fi"
                            ? "bg-purple-100 text-purple-800"
                            : book.category === "Non-Fiction"
                            ? "bg-green-100 text-green-800"
                            : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {book.category}
                      </span>
                      <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-full">
                        <span className="text-yellow-500 text-sm">⭐</span>
                        <span className="font-semibold text-yellow-700 text-sm">
                          {book.rating}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm">
                      by {book.author}
                    </p>
                    <p className="text-gray-500 text-sm line-clamp-3 flex-1">
                      {book.description}
                    </p>
                  </div>

                  <div className="p-4 border-t border-gray-100">
                    <Link
                      to={`/book/${book.id}`}
                      className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium"
                    >
                      View Details
                    </Link>
                  </div>
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
