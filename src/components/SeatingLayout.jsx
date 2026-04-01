import Table from "./Table";

export default function SeatingLayout({ seating, setSelectedTable, highlightedTableId }) {
  return (
    <div className="seating-layout-container">
      <div className="seating-layout">
        <div className="stage-label">Stage</div>
        <div className="dance-floor">
          <span>Dance Floor</span>
        </div>
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