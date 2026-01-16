import { useState, useEffect } from "react";

export default function SearchBar({ seating, setSearchResult }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.trim() === "" || query.trim().length < 3) {
      setSearchResult(null);
      return;
    }

    const results = [];
    for (const table of seating.tables) {
      for (const guest of table.guests) {
        if (guest.toLowerCase().includes(query.toLowerCase())) {
          results.push({ name: guest, table: table.name });
        }
      }
    }

    setSearchResult(results.length > 0 ? results : null);
  }, [query, seating, setSearchResult]);

  return (
    <div className="search-bar">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name to find your table..."
        className="search-input"
      />
    </div>
  );
}