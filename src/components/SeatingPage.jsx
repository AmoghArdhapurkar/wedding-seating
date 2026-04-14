import { useState } from "react";
import { Link } from "react-router-dom";
import seating from "../data/seating.json";
import SeatingLayout from "./SeatingLayout";
import SearchBar from "./SearchBar";

export default function SeatingPage() {
  const [searchResult, setSearchResult] = useState(null);
  const highlightedTableNames = searchResult
    ? [...new Set(searchResult.map((result) => result.table))]
    : [];

  return (
    <div className="seating-page">
      <div className="seating-header-card">
        <div className="seating-header">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
          <h1>Seating Arrangements</h1>
        </div>
        <p className="seating-subtitle">
          Search your name, then tap your table on the chart to see who is seated with you.
        </p>
        <SearchBar seating={seating} setSearchResult={setSearchResult} />
      </div>

      {searchResult && (
        <div className="search-results">
          {searchResult.length === 1 ? (
            <p className="search-result-item">
              {searchResult[0].name} is seated at <strong>{searchResult[0].table}</strong>
            </p>
          ) : (
            <div>
              <p className="search-result-count">
                Found {searchResult.length} result{searchResult.length !== 1 ? "s" : ""}:
              </p>
              <ul className="search-result-list">
                {searchResult.map((result, index) => (
                  <li key={index} className="search-result-item">
                    {result.name} is seated at <strong>{result.table}</strong>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <SeatingLayout highlightedTableNames={highlightedTableNames} />
    </div>
  );
}
