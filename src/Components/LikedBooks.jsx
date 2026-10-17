import { useContext } from "react";
import { BookContext } from "../features/Store";
import Books from "./Books";

export default function LikedBooks() {
  const { state, dispatch } = useContext(BookContext);

  const books = state.books.filter(book => 
    book.liked
);

  return <Books books={books} dispatch={dispatch} />;
}
