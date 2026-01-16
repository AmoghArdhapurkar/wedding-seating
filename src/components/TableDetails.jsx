export default function TableDetails({ table, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{table.name}</h2>
        <p className="guest-count">{table.guests.length} Guests</p>
        <ul className="guest-list">
          {table.guests.map((guest) => (
            <li key={guest}>{guest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}