export default function SeatingLayout({ seating, setSelectedTable }) {
    return (
      <div 
        style={{ 
          display: "flex", 
          gap: "20px", 
          flexWrap: "wrap", 
          marginTop: "20px" 
        }}>

        {seating.tables.map((table) => (
          <div
            key={table.id}
            onClick={() => setSelectedTable(table)}
            style={{
              //position: "absolute",
              //left: table.x,
              //top: table.y,
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "2px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontWeight: "bold",
              //backgroudColor: "#f5f5f5"
            }}
          >
            {table.name}
          </div>
        ))}
      </div>
    );
  }