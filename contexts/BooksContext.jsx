import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useContext } from "react";

const BooksContext = createContext();
const initialState = {
  books: [],
  isLoading: true,
  selectedBook: [],
  error: "",
  trending: [
    {
      name: "The Bhagavad Gita",
      author: "Vyasa",
      imageUrl:
        "https://m.media-amazon.com/images/I/81JlYf3CPnL._AC_UY218_.jpg",
      category: "Religion",
      otherInfo: "A sacred text in Hinduism.",
    },
    {
      name: "Moneyball",
      author: "Michael Lewis",
      imageUrl:
        "https://m.media-amazon.com/images/I/91SFr67X1XL._AC_UY218_.jpg",
      category: "Sport",
      otherInfo: "A book about data-driven baseball.",
    },
    {
      name: "Moneyball",
      author: "Michael Lewis",
      imageUrl:
        "https://m.media-amazon.com/images/I/91SFr67X1XL._AC_UY218_.jpg",
      category: "Sport",
      otherInfo: "A book about data-driven baseball.",
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "books/loaded":
      return { ...state, books: action.payload, isLoading: false };
    case "book/created":
      return { ...state, books: [action.payload], isLoading: false };
    case "error":
      return { ...state, error: action.payload };
    case "loading":
      return { ...state, isLoading: true };

    default:
      throw new Error("Unknown action type");
  }
}

const baseUrl = "http://localhost:8000";

function BooksProvider({ children }) {
  const [{ books, isLoading, selectedBook, error, trending }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(function () {
    async function fetchBooks() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${baseUrl}/books`);
        const data = await res.json();
        dispatch({ type: "books/loaded", payload: data });
      } catch {
        dispatch({
          type: "error",
          payload: "There was an error loading the data",
        });
      }
    }
    fetchBooks();
  }, []);

  return (
    <BooksContext.Provider
      value={{ books, selectedBook, error, isLoading, trending }}
    >
      {children}
    </BooksContext.Provider>
  );
}

function useBooks() {
  const context = useContext(BooksContext);
  if (context === undefined)
    throw new Error("Books context was used outside the provider");
  return context;
}

export { BooksProvider, useBooks };
