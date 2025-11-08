import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description:
        "A classic novel of the Jazz Age, exploring themes of idealism, resistance to change, social upheaval, and excess. Set in the summer of 1922, the story follows the lives of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island.",
      category: "Fiction",
      rating: 4.5,
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description:
        "A gripping and heart-wrenching story of racial injustice and childhood innocence. Set in the American South during the Great Depression, the novel is renowned for its warmth and humor, despite dealing with serious issues of rape and racial inequality.",
      category: "Fiction",
      rating: 4.8,
    },
    {
      id: 3,
      title: "Dune",
      author: "Frank Herbert",
      description:
        "Epic science fiction novel set in the distant future amidst a sprawling feudal interstellar empire where planetary fiefdoms are controlled by noble houses. The story explores the complex interactions of politics, religion, ecology, technology, and human emotion.",
      category: "Sci-Fi",
      rating: 4.6,
    },
    {
      id: 4,
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      description:
        "A exploration of how Homo sapiens came to be the dominant species on Earth. The book surveys the history of humankind from the evolution of archaic human species in the Stone Age up to the twenty-first century, focusing on Homo sapiens.",
      category: "Non-Fiction",
      rating: 4.4,
    },
    {
      id: 5,
      title: "1984",
      author: "George Orwell",
      description:
        "Dystopian social science fiction novel that examines the consequences of totalitarianism, mass surveillance, and repressive regimentation of people and behaviors within society. The story takes place in an imagined future, the year 1984.",
      category: "Sci-Fi",
      rating: 4.7,
    },
    {
      id: 6,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      description:
        "Fantasy novel that follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by Smaug the dragon. Bilbo's journey takes him from light-hearted, rural surroundings into more sinister territory.",
      category: "Fiction",
      rating: 4.9,
    },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: state.books.length + 1,
        ...action.payload,
      };
      state.books.unshift(newBook);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
