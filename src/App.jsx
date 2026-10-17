
import { useContext, useState } from "react";
import { BookContext } from "./features/Store";
import Navbar from "./Components/Navbar";
import Books from "./Components/Books";

export default function App() {
  const { state, dispatch } = useContext(BookContext);
  const [section, setSection] = useState("all");

  let books = state.books;

  // Filtrer par section
  if (section === "liked") {
    books = books.filter(book => book.liked);
  } else if (section === "reading") {
    books = books.filter(book => book.inReadingList);
  }

  // Filtrer par genre
  if (state.filter !== "Tous") {
    books = books.filter(
      book => book.genre === state.filter
    );
  }

  return (
    <>
      <Navbar
        section={section}
        setSection={setSection}
      />

      <main className="container py-4">
        <h2 className="text-center mb-4">
          {section === "all" && "Tous les livres"}
          {section === "liked" && "Mes livres favoris "}
          {section === "reading" && "Ma liste de lecture "}
        </h2>

        <Books books={books} dispatch={dispatch} />
      </main>
    </>
  );
}
