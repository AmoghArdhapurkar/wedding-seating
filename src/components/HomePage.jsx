import { Link } from "react-router-dom";
import couplePhoto from "../assets/couple_pic.PNG";
import logo from "../assets/logo.svg";

const SHARED_PHOTOS_ALBUM_URL =
  "https://photos.google.com/share/AF1QipMVxKHU8GvZ_IgAleeuLisViJbd7N2_P47nOFq6CIVsyO-m7uueJtZVbM8yIe1fTg?key=M2h6NVZienRSYWZpbmI0STJkVnpsZ19oaHQ1NS1R";

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

        <section className="home-photo-album" aria-labelledby="home-photo-album-heading">
          <h2 id="home-photo-album-heading" className="home-photo-album-title">
            Share your photos
          </h2>
          <p className="home-photo-album-text">
            If you capture moments during the reception, please add them to our shared Google Photos
            album so we can collect everyone&apos;s pictures in one place.
          </p>
          <a
            href={SHARED_PHOTOS_ALBUM_URL}
            className="photo-album-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open shared album
          </a>
        </section>
      </div>
    </div>
  );
}
