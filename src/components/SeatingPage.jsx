import { useState } from "react";
import { Link } from "react-router-dom";
import seating from "../data/seating.json";
import SeatingLayout from "./SeatingLayout";
import TableDetails from "./TableDetails";
import SearchBar from "./SearchBar";

export default function SeatingPage() {
  const [selectedTable, setSelectedTable] = useState(null);
  const [searchResult, setSearchResult] = useState(null);

  const handleTableClick = (table) => {
    setSelectedTable(table);
  };

  return (
    <div className="seating-page">
      <div className="seating-header">
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
        <h1>Seating Arrangements</h1>
      </div>

      <SearchBar seating={seating} setSearchResult={setSearchResult} />

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

      <SeatingLayout 
        seating={seating} 
        setSelectedTable={handleTableClick} 
        highlightedTableId={searchResult?.length === 1 ? 
          seating.tables.find(t => t.name === searchResult[0].table)?.id : null
        }
      />

      {selectedTable && (
        <TableDetails table={selectedTable} onClose={() => setSelectedTable(null)} />
      )}
    </div>
  );
}
