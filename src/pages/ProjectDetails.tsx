import { useParams } from "react-router-dom";
import { projects } from "../data";
import { HeaderProject } from "../components/Contents";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./project-details.css";

function ProjectDetails() {
  return (
    <>
      <TextProjectDetails />
      <WindowProject />
    </>
  );
}

// Project Props
interface ProjectProps {
  project: any;
}

// Text Project Details
function TextProjectDetails() {
  const { projectId } = useParams();
  const project = projects.filter(
    (project: any) => project.id === projectId
  )[0];

  return (
    <section className="project-derails">
      <HeaderProject />
      <div className="container">
        <TextProject project={project} />
      </div>
    </section>
  );
}
function TextProject({ project }: ProjectProps) {
  return (
    <div className="text-project-details">
      <h3>{project?.title}</h3>
      <p>{project?.description}</p>
      <ul className="d-flex m-0">
        {project?.skills.map((skill: string, index: number) => {
          return <li key={skill + index}>{skill}</li>;
        })}
      </ul>
    </div>
  );
}

// Window Project
function WindowProject() {
  const { projectId } = useParams();
  const project = projects.filter(
    (project: any) => project.id === projectId
  )[0];

  return (
    <section className="window-project">
      <Links project={project} />
      <Window project={project} />
    </section>
  );
}
function Links({ project }: ProjectProps) {
  return (
    <div className="container">
      <div className="text-end">
        <Link link={project?.github} name="GitHub" icon={faGithubAlt} />
        <Link link={project?.linkProject} name="View" icon={faEye} />
      </div>
    </div>
  );
}

interface LinkProps {
  link: string;
  name: string;
  icon: any;
}
function Link({ link, name, icon }: LinkProps) {
  return (
    <a href={link} target="_break">
      {name}
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}

function Window({ project }: ProjectProps) {
  return (
    <div className="window">
      <iframe src={project?.linkProject} title={project?.title}></iframe>
    </div>
  );
}

export default ProjectDetails;
