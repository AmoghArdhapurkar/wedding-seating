export default function Table({ table, onClick, highlight }) {
  return (
    <div
      onClick={() => onClick(table)}
      className={`table ${highlight ? "table-highlight" : ""}`}
      style={{
        left: `${table.x}%`,
        top: `${table.y}%`,
      }}
    >
      {table.name}
    </div>
  );
}