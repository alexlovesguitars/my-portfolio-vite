import { motion as Motion } from "framer-motion";
import Button from "../components/Button.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import "./Home.css";
import FoodieFeedCover from "../assets/FoodieFeed_Thumbnail.svg";
import PCP from "../assets/PCP_Thumbnail.svg";
import Portfolio from "../assets/Project Thumb Portfolio.svg";
import ReactLogo from "../assets/React-icon.svg";
import Rails from "../assets/Rails.png";

const projects = [
  {
    title: "FoodieFeed",
    slug: "foodiefeed",
    description: "Ruby On Rails / Hotwire / Javascript / HTML",
    image: FoodieFeedCover,
    imageAlt: "Foodie Feed",
    language: Rails,
    languageAlt: "Ruby On Rails",
  },
  {
    title: "Pest Control Pets",
    slug: "pcp",
    description: "A Rails 7 AirBnb clone project",
    image: PCP,
    imageAlt: "PCP Project",
    language: Rails,
    languageAlt: "Ruby On Rails",
  },
  {
    title: "My Portfolio",
    slug: "portfolio-alex",
    description: "React Portfolio Page",
    image: Portfolio,
    imageAlt: "Portfolio",
    language: ReactLogo,
    languageAlt: "React",
  },
];

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
