import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="home-content">
        <img src={logo} alt="Wedding Logo" className="wedding-logo" />

        <h1 className="home-welcome">Welcome to Our Reception</h1>
        <p className="home-subtitle">Saturday, April 25 · South Riding, Virginia</p>
        <p className="home-intro">
          Use this site to find your seat at our wedding reception!
        </p>

        <div className="bride-groom-placeholder" aria-hidden="true">
          <span>Photo of the happy couple coming soon</span>
        </div>

        <Link to="/seating" className="view-seating-btn">
          View Seating Arrangements
        </Link>
      </div>
    </div>
  );
}
