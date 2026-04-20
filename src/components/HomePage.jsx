import { Link } from "react-router-dom";
import couplePhoto from "../assets/couple_pic.PNG";
import logo from "../assets/logo.svg";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="home-content">
        <img src={logo} alt="Wedding Logo" className="wedding-logo" />

        <h1 className="home-welcome">Welcome to Our Reception</h1>
        <p className="home-subtitle">Sunday, April 26 · South Riding, Virginia</p>
        <p className="home-intro">
          Use this site to find your seat at our wedding reception!
        </p>

        <div className="bride-groom-photo">
          <img
            src={couplePhoto}
            alt="Bride and groom"
            className="bride-groom-photo-img"
          />
        </div>

        <Link to="/seating" className="view-seating-btn">
          View Seating Arrangements
        </Link>
      </div>
    </div>
  );
}
