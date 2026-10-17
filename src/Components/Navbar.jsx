
import { useContext } from "react";
import { BookContext } from "../features/Store";

export default function Navbar({ section, setSection }) {
  const { state, dispatch } = useContext(BookContext);

  const sections = [
    { id: "all", label: "Tous les livres" },
    { id: "liked", label: "Favoris" },
    { id: "reading", label: "Ma liste de lecture" }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          BookBox 
        </a>

        <div className="d-flex flex-wrap gap-2">
          {sections.map(item => (
            <button
              key={item.id}
              className={`btn ${
                section === item.id
                  ? "btn-warning"
                  : "btn-outline-light"
              }`}
              onClick={() => setSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <select
          className="form-select mt-2"
          style={{ maxWidth: "160px" }}
          value={state.filter}
          onChange={e =>
            dispatch({
              type: "FILTER",
              payload: e.target.value
            })
          }
        >
          <option value="Tous">Tous les genres</option>
          <option value="Roman">Roman</option>
          <option value="Classique">Classique</option>
          <option value="Science-fiction">Science-fiction</option>
        </select>
      </div>
    </nav>
  );
}
