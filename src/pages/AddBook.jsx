import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../store/booksSlice";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    category: "",
    rating: "",
  });

  const [errors, setErrors] = useState({});

  const categories = [
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Mystery",
    "Biography",
    "History",
    "Romance",
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.author.trim()) newErrors.author = "Author is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.rating) newErrors.rating = "Rating is required";
    else if (formData.rating < 0 || formData.rating > 5)
      newErrors.rating = "Rating must be between 0 and 5";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const bookData = { ...formData, rating: parseFloat(formData.rating) };
      dispatch(addBook(bookData));
      navigate("/browse");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Add New Book
            </h1>
            <p className="text-gray-600">
              Share your favorite book with our community
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title Field */}
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Book Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.title
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    placeholder="Enter book title"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm mt-2">{errors.title}</p>
                  )}
                </div>

                {/* Author Field */}
                <div>
                  <label
                    htmlFor="author"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Author *
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.author
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    placeholder="Enter author name"
                  />
                  {errors.author && (
                    <p className="text-red-500 text-sm mt-2">{errors.author}</p>
                  )}
                </div>

                {/* Category and Rating Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Category Field */}
                  <div>
                    <label
                      htmlFor="category"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        errors.category
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.category}
                      </p>
                    )}
                  </div>

                  {/* Rating Field */}
                  <div>
                    <label
                      htmlFor="rating"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Rating (0-5) *
                    </label>
                    <input
                      type="number"
                      id="rating"
                      name="rating"
                      min="0"
                      max="5"
                      step="0.1"
                      value={formData.rating}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        errors.rating
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      placeholder="Enter rating"
                    />
                    {errors.rating && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.rating}
                      </p>
                    )}
                  </div>
                </div>

                {/* Description Field */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${
                      errors.description
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    placeholder="Enter book description"
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.description}
                    </p>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button type="submit" className="btn-primary flex-1">
                    Add Book to Library
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/browse")}
                    className="btn-secondary flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
