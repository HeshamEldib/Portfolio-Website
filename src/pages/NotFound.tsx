import { Link } from "react-router-dom";
import "./not-found.css";
import image_404 from "../../public/images/404.png";
import image_rocket from "../../public/images/rocket.png";
import image_earth from "../../public/images/earth.png";
import image_moon from "../../public/images/moon.png";
import image_astronaut from "../../public/images/astronaut.png";

export default function NotFound() {
  return (
    <section className="not-found">
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
      <img className="image-404" src={image_404} width="300px" />
      <Link to="/Portfolio-Website" className="btn-go-home">
        GO BACK HOME
      </Link>
    </div>
  );
}
function Objects() {
  return (
    <div className="objects">
      <img className="object_rocket" src={image_rocket} width="40px" />
      <div className="earth-moon">
        <img className="object_earth" src={image_earth} width="100px" />
        <img className="object_moon" src={image_moon} width="80px" />
      </div>
      <div className="box_astronaut">
        <img className="object_astronaut" src={image_astronaut} width="140px" />
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
