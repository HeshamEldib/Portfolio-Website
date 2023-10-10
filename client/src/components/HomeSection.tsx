import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainButton from "./MainButton";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import "./home-section.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchText } from "../redux/slices/textSlices";
import bg from "../assets/images/H55.png";

export default function HomeSection() {
  const texts = useSelector((state: RootState) => state.text.text[0]);
  const dispatch = useDispatch();

  const homeText: any[] = texts?.filter((e: any) => e.section === "home");

  useEffect(() => {
    dispatch(fetchText());
  }, []);

  return (
    <section className="home" id="ho">
      <div className="container">
        {homeText?.map((text) => {
          return <Text key={text._id} text={text?.content} />;
        })}

        <Image image={bg} />
      </div>
    </section>
  );
}

interface TextProps {
  text: string;
}
function Text({ text }: TextProps) {
  return (
    <div className="text">
      <TextContent text={text} />
      <a href="#contact">
        <MainButton title="Get In touch ">
          <FontAwesomeIcon icon={faShare} beat />
        </MainButton>
      </a>
    </div>
  );
}

interface TextContentProps {
  text: string;
}
function TextContent({ text }: TextContentProps) {
  return (
    <>
      <h6>Hi, my name is</h6>
      <h1>Hesham Eldib</h1>
      <p>{text}</p>
    </>
  );
}

interface ImageProps {
  image: string;
}
function Image({ image }: ImageProps) {
  return (
    <div className="image">
      <div className="cover">
        <img src={image} alt="" />
      </div>
    </div>
  );
}
