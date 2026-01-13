export default function TableDetails({ table, onClose }) {
    return (
      <div style={{ border: "1px solid gray", padding: "16px", marginTop: "20px", width: "250px" }}>
        <h2>{table.name}</h2>
  
        <ul>
          {table.guests.map((guest) => (
            <li key={guest}>{guest}</li>
          ))}
        </ul>
  
        <button onClick={onClose}>Close</button>
      </div>
    );
  }