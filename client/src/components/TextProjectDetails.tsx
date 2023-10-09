import HeaderProject from "./HeaderProjects";
import "./text-project-details.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useParams } from "react-router-dom";
import { fetchProjectById } from "../redux/slices/projectByIdSlices";
import { useEffect } from "react";



export default function TextProjectDetails() {
  const project = useSelector(
    (state: RootState) => state.projectById.project[0]
  );
  const dispatch = useDispatch();

  const { projectId } = useParams();

  useEffect(() => {
    dispatch(fetchProjectById(projectId));
  }, []);

  return (
    <section className="project-derails">
    <HeaderProject />
        <div className="container">
          <TextProject
            project={project}
          />
        </div>
      </section>
  );
}

interface TextProjectDetailsProps {
  project: any;
}
function TextProject({
  project,
}: TextProjectDetailsProps) {
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
