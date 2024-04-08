function Project({ projectItem }) {
  return (
    <div className="project-box">
      <img
        className="project-img"
        src={`./imgs/${projectItem.img}.png`}
        alt="project image"
      />
      <div className="projects-text-box">
        <p className="project-title">{projectItem.title}</p>
        <p className="project-description">{projectItem.description}</p>
        <p className="project-skills">{`Tools : ${projectItem.skills}`}</p>
        <div className="project-links">
          <div className="box-icon">
            <img
              className="project-icon"
              src="./imgs/link-icon1.png"
              alt="link icon"
            />
            <a
              className="project-link"
              target="_blanc"
              href={projectItem.liveLink}
            >
              Live Preview
            </a>
          </div>

          <div className="box-icon">
            <img
              className="project-icon"
              src="./imgs/link-icon2.png"
              alt="link icon"
            />
            <a
              className="project-link"
              target="_blanc"
              href={projectItem.githubLink}
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
