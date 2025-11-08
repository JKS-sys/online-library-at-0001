import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const books = useSelector((state) => state.books.books);
  const popularBooks = books.slice(0, 3);

  const categories = [
    {
      name: "Fiction",
      icon: "📚",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      name: "Non-Fiction",
      icon: "📖",
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      name: "Sci-Fi",
      icon: "🚀",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      name: "Mystery",
      icon: "🕵️",
      color: "bg-gradient-to-r from-orange-500 to-red-500",
    },
    {
      name: "Biography",
      icon: "👤",
      color: "bg-gradient-to-r from-indigo-500 to-blue-500",
    },
    {
      name: "History",
      icon: "🏛️",
      color: "bg-gradient-to-r from-amber-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to Our
            <span className="hero-gradient">Digital Library</span>
          </h1>
          <p className="hero-description">
            Discover thousands of books across various genres. Explore, read,
            and expand your knowledge with our vast collection of literary
            treasures.
          </p>
          <Link to="/browse" className="btn btn-primary">
            <span>Explore Collection</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Browse Categories
            </h2>
            <p className="text-gray-600 text-lg">
              Find your next favorite book by category
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/books/${category.name.toLowerCase()}`}
                className={`category-card ${category.color}`}
              >
                <div className="category-card-content">
                  <div className="category-icon">{category.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-blue-100">Explore {category.name} books</p>
                </div>
                <div className="category-bg-icon">{category.icon}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Books Section */}
      <section className="py-16 bg-white bg-opacity-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Popular Reads
            </h2>
            <p className="text-gray-600 text-lg">
              Curated selection of our most loved books
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularBooks.map((book) => (
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
                    className="btn btn-secondary btn-full justify-center"
                  >
                    <span>View Details</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
