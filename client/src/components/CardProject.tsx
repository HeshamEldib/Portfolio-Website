import { Link } from "react-router-dom";
import MainButton from "./MainButton";

import "./card-project.css";

interface BoxProps {
  project: any;
}
export default function CardProject({ project }: BoxProps) {
  return (
    <div className="card-project">
      <Image poster={project.poster} />
      <Text project={project} />
      <Link to={`/project/${project._id}`}>
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
