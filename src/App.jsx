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
        <p>
          🎉 {searchResult.name} is seated at <strong>{searchResult.table}</strong>
        </p>
      )}

      <SeatingLayout seating={seating} setSelectedTable={setSelectedTable} />

      {selectedTable && (
        <TableDetails table={selectedTable} onClose={() => setSelectedTable(null)} />
      )}
    </div>
  );
}

export default App;
