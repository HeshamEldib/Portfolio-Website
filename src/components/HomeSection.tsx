import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MainButton } from "./Contents";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import "./home-section.css";

export default function HomeSection() {
  return (
    <section className="home" id="ho">
      <div className="container">
        <Text />

        <Image />
      </div>
    </section>
  );
}

function Text() {
  return (
    <div className="text">
      <TextContent />
      <a href="#contact">
        <MainButton title="Get In touch ">
          <FontAwesomeIcon icon={faShare} beat />
        </MainButton>
      </a>
    </div>
  );
}

function TextContent() {
  return (
    <>
      <h6>Hi, my name is</h6>
      <h1>Hesham Eldib</h1>
      <p>I'm a Front End Web Developer (React).</p>
    </>
  );
}

function Image() {
  return (
    <div className="image">
      <div className="cover">
        <img src="./public/images/H55.png" alt="" />
      </div>
    </div>
  );
}
