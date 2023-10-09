import { Link } from "react-router-dom";
import "./not-found.css";

export default function NotFound() {
  return (
    <section className="not-found">
      {/* <!--
VIEW IN FULL SCREEN MODE
FULL SCREEN MODE: http://salehriaz.com/404Page/404.html

DRIBBBLE: https://dribbble.com/shots/4330167-404-Page-Lost-In-Space
--> */}

      <div className="stars">
        <CentralBody />
        <Objects />
        <GlowingStars />
      </div>
    </section>
  );
}


function CentralBody() {
  return (
    <div className="central-body">
      <img
        className="image-404"
        src="http://salehriaz.com/404Page/img/404.svg"
        width="300px"
      />
      <Link to="/" className="btn-go-home">
        GO BACK HOME
      </Link>
    </div>
  );
}
function Objects() {
  return (
    <div className="objects">
      <img
        className="object_rocket"
        src="http://salehriaz.com/404Page/img/rocket.svg"
        width="40px"
      />
      <div className="earth-moon">
        <img
          className="object_earth"
          src="http://salehriaz.com/404Page/img/earth.svg"
          width="100px"
        />
        <img
          className="object_moon"
          src="http://salehriaz.com/404Page/img/moon.svg"
          width="80px"
        />
      </div>
      <div className="box_astronaut">
        <img
          className="object_astronaut"
          src="http://salehriaz.com/404Page/img/astronaut.svg"
          width="140px"
        />
      </div>
    </div>
  );
}
function GlowingStars() {
  return (
    <div className="glowing_stars">
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}
function Star() {
  return <div className="star"></div>;
}