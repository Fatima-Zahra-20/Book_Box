
export default function BookCard({ book, dispatch }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="row g-0 align-items-center">
        <div className="col-4 col-md-3">
          <img
            src={book.cover}
            alt={book.title}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-8 col-md-9">
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>

            <p className="card-text mb-1">
              Auteur : {book.author}
            </p>

            <p className="card-text mb-1">
              Année : {book.year}
            </p>

            <p className="card-text">
              Genre : {book.genre}
            </p>

            <div className="d-flex flex-wrap gap-2">
              <button
                className={`btn btn-sm ${
                  book.liked ? "btn-danger" : "btn-outline-danger"
                }`}
                onClick={() =>
                  dispatch({
                    type: "TOGGLE_LIKE",
                    payload: book.id
                  })
                }
              >
                {book.liked ? "Favori" : "Ajouter aux favoris"}
              </button>

              <button
                className="btn btn-sm btn-primary"
                onClick={() =>
                  dispatch({
                    type: book.inReadingList
                      ? "REMOVE_FROM_READING_LIST"
                      : "ADD_TO_READING_LIST",
                    payload: book.id
                  })
                }
              >
                {book.inReadingList
                  ? "Retirer de ma liste"
                  : "Ajouter à ma liste"}
              </button>

              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => {
                  if (window.confirm("Supprimer ce livre ?")) {
                    dispatch({
                      type: "REMOVE_BOOK",
                      payload: book.id
                    });
                  }
                }}
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
