import { useState } from "react";
import seating from "./data/seating.json";
import SeatingLayout from "./components/SeatingLayout";
import TableDetails from "./components/TableDetails";
import SearchBar from "./components/SearchBar";

function App() {
  const [selectedTable, setSelectedTable] = useState(null);
  const [searchResult, setSearchResult] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Wedding Reception Seating</h1>

      <SearchBar seating={seating} setSearchResult={setSearchResult} />

      {searchResult && (
        <div style={{ marginTop: "10px" }}>
          {searchResult.length === 1 ? (
            <p>
              🎉 {searchResult[0].name} is seated at <strong>{searchResult[0].table}</strong>
            </p>
          ) : (
            <div>
              <p style={{ marginBottom: "8px" }}>
                Found {searchResult.length} result{searchResult.length !== 1 ? "s" : ""}:
              </p>
              <ul style={{ margin: 0, paddingLeft: "20px" }}>
                {searchResult.map((result, index) => (
                  <li key={index} style={{ marginBottom: "4px" }}>
                    🎉 {result.name} is seated at <strong>{result.table}</strong>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <SeatingLayout seating={seating} setSelectedTable={setSelectedTable} />

      {selectedTable && (
        <TableDetails table={selectedTable} onClose={() => setSelectedTable(null)} />
      )}
    </div>
  );
}

export default App;
