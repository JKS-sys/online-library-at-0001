import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Book Not Found
        </h1>
        <Link to="/browse" className="text-blue-600 hover:text-blue-700">
          Back to Browse Books
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/browse"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          ← Back to Browse Books
        </Link>

        {/* Book Details */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  {book.title}
                </h1>
                <p className="text-2xl text-gray-600 mb-6">by {book.author}</p>

                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {book.category}
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-xl mr-1">⭐</span>
                    <span className="text-lg font-semibold text-gray-700">
                      {book.rating}/5
                    </span>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Description
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {book.description}
                  </p>
                </div>
              </div>

              <div className="md:w-64 flex-shrink-0">
                <div className="bg-gray-100 rounded-lg p-6 text-center">
                  <div className="w-32 h-40 bg-blue-200 rounded mx-auto mb-4 flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">
                      Book Cover
                    </span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
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
