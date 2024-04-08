import Heading from "./Heading";
import ProjectsList from "./ProjectsList";

function Projects() {
  return (
    <section className="section-projects section" id="projects">
      <Heading headingName="Projects" />
      <ProjectsList />
    </section>
  );
}

export default Projects;
