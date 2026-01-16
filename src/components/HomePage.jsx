import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="home-content">
        <img src={logo} alt="Wedding Logo" className="wedding-logo" />
        
        <div className="placeholder-image">
          <span>Photo Coming Soon</span>
        </div>

        <div className="reception-details">
          <h1>Join Us for Our Wedding Reception</h1>
          
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Date</span>
              <span className="detail-value">Saturday, April 25, 2026</span>
            </div>
            
            <div className="detail-item">
              <span className="detail-label">Time</span>
              <span className="detail-value">5:00 PM - 11:00 PM</span>
            </div>
            
            <div className="detail-item">
              <span className="detail-label">Location</span>
              <span className="detail-value">The Bellevue Conference & Event Center<br />43350 Little River Tpke, Chantilly, VA 20152</span>
            </div>
          </div>
        </div>

        <Link to="/seating" className="view-seating-btn">
          View Seating Arrangements
        </Link>
      </div>
    </div>
  );
}
