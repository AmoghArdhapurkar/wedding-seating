import Table from "./Table";

export default function SeatingLayout({ seating, setSelectedTable, highlightedTableId }) {
  return (
    <div className="seating-layout-container">
      <div className="seating-layout">
        {seating.tables.map((table) => (
          <Table
            key={table.id}
            table={table}
            onClick={setSelectedTable}
            highlight={highlightedTableId === table.id}
          />
        ))}
      </div>
    </div>
  );
}