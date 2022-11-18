import { CharCard } from "../CharCard";
import "./style.css";

export function Characters({
  characterList,
  currentPage,
  setCurrentPage,
  lastPage,
}) {
  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  function previousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <section className="section">
      <header className="header">
        <h1>The Rick and Morty API</h1>
      </header>
      <ul>
        {characterList.map((elem) => {
          return (
            <CharCard
              id={elem.id}
              name={elem.name}
              status={elem.status}
              species={elem.species}
              image={elem.image}
              origin={elem.origin}
              location={elem.location}
              url={elem.url}
            />
          );
        })}
      </ul>
      {currentPage === 1 && (
        <button className="button next" onClick={nextPage}>
          +
        </button>
      )}
      {currentPage === lastPage && (
        <button className="button previous" onClick={previousPage}>
          -
        </button>
      )}
      {currentPage > 1 && currentPage < lastPage && (
        <div className="container-buttons">
          <button className="button previous" onClick={previousPage}>
            -
          </button>
          <button className="button next" onClick={nextPage}>
            +
          </button>
        </div>
      )}
    </section>
  );
}
