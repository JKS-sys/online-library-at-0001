import { createSlice } from "@reduxjs/toolkit";

// Initail dummy data
const initialBooks = {
  books: [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description:
        "A novel set in the Jazz Age that tells the story of Jay Gatsby and his unrequited love for Daisy Buchanan.",
      category: "Fiction",
      rating: 4.5,
    },
    {
      id: 2,
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      description:
        "A landmark volume in science writing by one of the great minds of our time, Stephen Hawking.",
      category: "Non-Fiction",
      rating: 4.7,
    },
    {
      id: 3,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      description:
        "A fantasy novel and children's book by English author J.R.R. Tolkien.",
      category: "Fantasy",
      rating: 4.8,
    },
    {
      id: 4,
      title: "1984",
      author: "George Orwell",
      description:
        "A dystopian novel set in a totalitarian society ruled by Big Brother.",
      category: "Fiction",
      rating: 4.6,
    },
    {
      id: 5,
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      description:
        "A groundbreaking narrative of humanity's creation and evolution.",
      category: "Non-Fiction",
      rating: 4.9,
    },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    addBook: (state, isAction) => {
      const newBook = {
        id: state.books.length + 1,
        ...isAction.payload,
      };
      state.books.unshift(newBook);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
