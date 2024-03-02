import { Link } from "react-router-dom";
import "./contents.css";
import image_bg6 from "../../public/images/bg-6.jpg";


// card project
interface BoxProps {
  project: any;
}
export function CardProject({ project }: BoxProps) {
  return (
    <div className="card-project">
      <Image poster={project.poster} />
      <Text project={project} />
      <Link to={`/Portfolio-Website/project/${project.id}`}>
        <MainButton title="show" />
      </Link>
    </div>
  );
}

interface ImageProps {
  poster: string;
}
function Image({ poster }: ImageProps) {
  return (
    <div className="image">
      <img src={poster || "./public/images/web-development.jpg"} alt="" />
    </div>
  );
}

interface TextProps {
  project: any;
}
function Text({ project }: TextProps) {
  return (
    <div className="text">
      <h4>{project.title}</h4>
      <p>{project.description.slice(0, 50) + "..."}</p>
      <div className="software">
        {project.skills.map((skill: string, index: number) => {
          return <span key={skill + index}>{skill}</span>;
        })}
      </div>
    </div>
  );
}

// main title
interface MainTitleProps {
  title: string;
}
export function MainTitle({ title }: MainTitleProps) {
  return (
    <div className="main-title">
      <h2>{title}</h2>
    </div>
  );
}

// main button
interface MainButtonProps {
  children?: any;
  title: string;
}
export function MainButton({ children, title }: MainButtonProps) {
  return (
    <div className="main-button">
      <button className="magnet-button">
        <span className="hover-filp-item">
          <span data-text={title}>{title}</span>
        </span>
        {children}
      </button>
    </div>
  );
}

// Header Project
export function HeaderProject() {
  return (
    <section className="header-project">
      <div className="image">
        <img src={image_bg6} alt="" />
      </div>
    </section>
  );
}
