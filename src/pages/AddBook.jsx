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

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.author.trim()) {
      newErrors.author = "Author is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!formData.category) {
      newErrors.category = "Category is required";
    }

    if (!formData.rating) {
      newErrors.rating = "Rating is required";
    } else if (formData.rating < 0 || formData.rating > 5) {
      newErrors.rating = "Rating must be between 0 and 5";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const bookData = {
        ...formData,
        rating: parseFloat(formData.rating),
      };

      dispatch(addBook(bookData));
      navigate("/browse");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        <div className="form-container">
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
          <div className="card">
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title Field */}
                <div className="form-group">
                  <label htmlFor="title" className="form-label">
                    Book Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className={`form-input ${errors.title ? "error" : ""}`}
                    placeholder="Enter book title"
                  />
                  {errors.title && <p className="form-error">{errors.title}</p>}
                </div>

                {/* Author Field */}
                <div className="form-group">
                  <label htmlFor="author" className="form-label">
                    Author *
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    className={`form-input ${errors.author ? "error" : ""}`}
                    placeholder="Enter author name"
                  />
                  {errors.author && (
                    <p className="form-error">{errors.author}</p>
                  )}
                </div>

                {/* Category and Rating Row */}
                <div className="form-grid">
                  {/* Category Field */}
                  <div className="form-group">
                    <label htmlFor="category" className="form-label">
                      Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className={`form-select ${
                        errors.category ? "error" : ""
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
                      <p className="form-error">{errors.category}</p>
                    )}
                  </div>

                  {/* Rating Field */}
                  <div className="form-group">
                    <label htmlFor="rating" className="form-label">
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
                      className={`form-input ${errors.rating ? "error" : ""}`}
                      placeholder="Enter rating"
                    />
                    {errors.rating && (
                      <p className="form-error">{errors.rating}</p>
                    )}
                  </div>
                </div>

                {/* Description Field */}
                <div className="form-group">
                  <label htmlFor="description" className="form-label">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    className={`form-input form-textarea ${
                      errors.description ? "error" : ""
                    }`}
                    placeholder="Enter book description"
                  />
                  {errors.description && (
                    <p className="form-error">{errors.description}</p>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button type="submit" className="btn btn-primary flex-1">
                    Add Book to Library
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/browse")}
                    className="btn btn-secondary flex-1"
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
