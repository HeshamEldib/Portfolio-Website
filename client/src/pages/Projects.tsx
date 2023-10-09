import { useEffect } from "react";
import CardProject from "../components/CardProject";
import MainTitle from "../components/MainTitle";
import HeaderProject from "../components/HeaderProjects";

import "./project.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchProjects } from "../redux/slices/projectSlices";

export default function Projects() {
  return (
    <>
      <HeaderProject />
      <ContentProjects />
    </>
  );
}

function ContentProjects() {
  return (
    <section className="all-projects">
      <div className="container">
        <MainTitle title="All Projects" />
        <AllProjects />
      </div>
    </section>
  );
}

function AllProjects() {
  const projects = useSelector(
    (state: RootState) => state.projects.projects[0]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
    <div className="cards-projects">
      <div className="row">
        {projects?.map((project: any) => {
          return (
            <div className="col-md-6 col-lg-4 py-2" key={project._id}>
              <CardProject project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
