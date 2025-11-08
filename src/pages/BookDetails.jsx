import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Book Not Found
          </h1>
          <Link to="/browse" className="btn btn-primary">
            Back to Browse Books
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        <Link to="/browse" className="back-button">
          ← Back to Browse Books
        </Link>

        <div className="book-details">
          <div className="book-details-card">
            <div className="book-details-content">
              <div className="book-details-grid">
                <div className="book-info">
                  <h1>{book.title}</h1>
                  <p className="book-author-large">by {book.author}</p>

                  <div className="book-meta">
                    <span
                      className={`book-category badge-${book.category
                        .toLowerCase()
                        .replace("-", "")}`}
                    >
                      {book.category}
                    </span>
                    <div className="book-rating-large">
                      <span>⭐</span>
                      <span>{book.rating}/5</span>
                    </div>
                  </div>

                  <div className="book-description-large">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Description
                    </h3>
                    <p>{book.description}</p>
                  </div>
                </div>

                <div className="book-cover">
                  <div className="cover-placeholder">Book Cover</div>
                  <button className="btn btn-primary w-full">
                    Borrow Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
