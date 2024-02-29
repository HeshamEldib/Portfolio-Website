import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MainButton, MainTitle } from "./Contents";
import "./about-section.css";

function AboutSection() {
  return (
    <section className="about" id="ab">
      <MainTitle title="About Me" />

      <div className="container">
        <div className="text">
          <div className="ctaDescription">
            <p>
              Good day, My name is Hesham and I am currently a student at Fayoum
              University, Faculty of Science, Mathematics Department. I am
              expected to graduate after 1 year.
            </p>
            <p>
              Ever since high school, I have had a passion for information
              technology and self-learned HTML and CSS programming. During my
              university studies, I discovered my interest in developing modern
              applications and web technologies.
            </p>
            <p>
              I have experience in JavaScript, React, NodeJS, MongoDB
              programming and have developed some small projects like games
              websites and e-commerce websites using MERN stack. I also have
              skills in designing user-friendly and responsive user interfaces.
            </p>
            <p>
              Although I am still a student, the hands-on experience I gained
              will be valuable for companies. I am enthusiastic and committed to
              work as part of a team.
            </p>
            <p>
              I dream of joining real life projects to gain more experience,
              with opportunities for learning and growth. I will be happy to
              contribute to the success of your projects.
            </p>
            <p>
              If you have any projects or internship opportunities available,
              please feel free to contact me. I would appreciate your
              consideration of my resume.
            </p>
            <p>
              Thank you for your time and I look forward to hearing from you.
            </p>
          </div>

          <a
            href="./public/images/HESHAM ELDIB FRONT END WEB DEVELOPER RESUME.pdf"
            className="main-button"
            download="HESHAM ELDIB FRONT END WEB DEVELOPER RESUME"
            target="_break"
          >
            <MainButton title="Download CV ">
              <FontAwesomeIcon icon={faDownload} />
            </MainButton>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
