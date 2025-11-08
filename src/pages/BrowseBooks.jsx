import React from "react";
import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books.books);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  // Filter books based on category from URL params
  const filteredBooks = useMemo(() => {
    let filtered = books;
    if (category) {
      filtered = filtered.filter((book) => book.category === category);
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
      <h1 className="text-2xl font-bold mb-4">Browse Books</h1>
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 p-2 mb-4 w-full"
      />
      <ul className="space-y-2">
        {filteredBooks.map((book) => (
          <li key={book.id} className="border-b border-gray-200 pb-2">
            <Link
              to={`/books/${book.id}`}
              className="text-blue-600 hover:underline"
            >
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseBooks;
