import BookCard from "./BookCard";
export default function Books({ books, dispatch }) {
  if (books.length === 0) {
    return (
      <div className="alert alert-info text-center">
        Aucun livre trouvé 
      </div>
    );
  }

  return (
    <div>
      {books.map(book => (
        <BookCard
          key={book.id}
          book={book}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}
