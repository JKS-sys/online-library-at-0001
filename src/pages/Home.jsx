import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const books = useSelector((state) => state.books.books);
  const popularBooks = books.slice(0, 3); // Get first 3 books as popular

  const categories = [
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Mystery",
    "Biography",
    "History",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to Our Online Library
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover thousands of books across various categories. Explore, read,
          and expand your knowledge with our vast collection.
        </p>
      </section>

      {/* Categories Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Book Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/books/${category.toLowerCase()}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="text-lg font-medium text-gray-800">{category}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Books Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Popular Books
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {book.title}
                </h3>
                <p className="text-gray-600 mb-2">by {book.author}</p>
                <p className="text-gray-500 text-sm mb-4">{book.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-500 font-semibold">
                    ⭐ {book.rating}
                  </span>
                  <Link
                    to={`/book/${book.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
