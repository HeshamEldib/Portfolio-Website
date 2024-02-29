import { CardProject, MainTitle, HeaderProject } from "../components/Contents";
import { projects } from "../data";
import "./project.css";

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
  return (
    <div className="cards-projects">
      <div className="row">
        {projects?.map((project: any) => {
          return (
            <div className="col-md-6 col-lg-4 py-2" key={project.id}>
              <CardProject project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
