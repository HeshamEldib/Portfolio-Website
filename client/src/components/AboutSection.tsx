import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainTitle from "./MainTitle";
import MainButton from "./MainButton";
import "./about-section.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchText } from "../redux/slices/textSlices";

function AboutSection() {
  const texts = useSelector((state: RootState) => state.text.text[0]);
  const dispatch = useDispatch();

  const aboutText: any[] = texts?.filter((e: any) => e.section === "about");

  useEffect(() => {
    dispatch(fetchText());
  }, []);

  return (
    <section className="about" id="ab">
      <MainTitle title="About Me" />

      <div className="container">
        <div className="text">
          <div className="ctaDescription">
            {aboutText?.map((text: any) => {
              return <TextContent text={text.content} key={text._id} />;
            })}
          </div>

          <a
            href="http://localhost:5000/uploads/HESHAM ELDIB FRONT END WEB DEVELOPER RESUME.pdf"
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

interface TextContentProps {
  text: string;
}
function TextContent({ text }: TextContentProps) {
  return <p>{text}</p>;
}

export default AboutSection;
