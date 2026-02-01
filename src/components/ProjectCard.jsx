import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./ProjectCard.css";

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectCard({ project, children }) {
  return (
    <motion.div variants={itemVariants} layoutId={project.slug}>
      <Link to={`/projects/${project.slug}`} className="project-card">
        <img
          className="project-picture"
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
        />

        <div className="overlay">
          <img
            className="language-logo"
            src={project.language}
            alt={project.langaugeAlt}
          />
        </div>
      </Link>

      <p className="card-description">{project.description}</p>
      <h2 className="card-title">{project.title}</h2>
    </motion.div>
  );
}
