import { FiArrowUpRight } from "react-icons/fi";
import "./ProjectCard.css"
const ProjectCard = ({project}) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-info">
        <div className="project-text">
          <h3>{project.title}</h3>
          <span>{project.category}</span>
        </div>

        <a
          href={project.link}
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiArrowUpRight />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
