import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import "./window-project.css";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useParams } from "react-router-dom";
import { fetchProjectById } from "../redux/slices/projectByIdSlices";
import { useEffect } from "react";


export default function WindowProject() {
  const project = useSelector(
    (state: RootState) => state.projectById.project[0]
  );
  const dispatch = useDispatch();

  const { projectId } = useParams();

  useEffect(() => {
    dispatch(fetchProjectById(projectId));
  }, []);

  return (
    <section className="window-project">
      <Links project={project} />
      <Window project={project} />
    </section>
  );
}

interface WindowProjectProps {
  project: any;
}
function Links({ project }: WindowProjectProps) {
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

function Window({ project }: WindowProjectProps) {
  return (
    <div className="window">
      <iframe src={project?.linkProject} title={project?.title}></iframe>
    </div>
  );
}
