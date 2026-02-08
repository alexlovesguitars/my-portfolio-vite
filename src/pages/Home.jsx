import { motion as Motion } from "framer-motion";
import Button from "../components/Button.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import "./Home.css";
import { projects } from "../data/projects.js";

// Framer Motion variants
const pageVariants = { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 } };
const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

export default function Home() {
  return (
    <Motion.div
      className="container-fluid"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="Intro text-left">
        <h1>I'm Alex.</h1>
        <h4>SOUND ENGINEER TURNED DEVELOPER</h4>
        <p>This is my portfolio, used to showcase projects and practice new skills!</p>

        <div className="git-home">
          <Button variant="ghost" hrefKey="github">GitHub</Button>
          <Button variant="ghost" hrefKey="linkedin">LinkedIn</Button>
          <Button variant="ghost" hrefKey="resume">Resume</Button>
        </div>

        <Motion.div className="projects" variants={containerVariants} initial="hidden" animate="show">
          {projects.map((project) => (
            <Motion.div key={project.slug} className="project-wrapper" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <ProjectCard project={project} />
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </Motion.div>
  );
}
