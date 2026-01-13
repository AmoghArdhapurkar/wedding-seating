import { useState } from "react";

export default function SearchBar({ seating, setSearchResult }) {
  const [query, setQuery] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    for (const table of seating.tables) {
      for (const guest of table.guests) {
        if (guest.toLowerCase().includes(query.toLowerCase())) {
          setSearchResult({ name: guest, table: table.name });
          return;
        }
      }
    }

    setSearchResult(null);
  }

  return (
    <form onSubmit={handleSearch} style={{ marginTop: "20px" }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search your name"
        style={{ padding: "6px", fontSize: "16px" }}
      />
      <button type="submit" style={{ padding: "6px 12px", marginLeft: "8px" }}>
        Search
      </button>
    </form>
  );
}