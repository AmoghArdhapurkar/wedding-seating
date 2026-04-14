export default function Table({ table, onClick, highlight }) {
  return (
    <div
      onClick={() => onClick(table)}
      className={`table ${highlight ? "table-highlight" : ""}`}
      style={{
        left: `${table.x ?? 50}%`,
        top: `${table.y ?? 50}%`,
      }}
    >
      {table.name}
    </div>
  );
}