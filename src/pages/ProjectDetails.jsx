import { useParams } from "react-router-dom";
import ScrollReveal from "../hooks/ScrollReveal.jsx";
import '../pages/ProjectDetails.css';
import Button from "../components/Button.jsx";
import PageTransition from "../hooks/PageTransition.jsx";
import TestCredential from "../components/TestCredential.jsx";
import { projects } from "../data/projects.js";


export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);


  if (!project) {
    return (
      <PageTransition>
        <div className="container-fluid">
          <h1>Project not found</h1>
        </div>
      </PageTransition>
    );
  }

  return (
    <>

    {/* <ProjectHeader /> */}

    <PageTransition>
    {/*   <section className="hero-banner">
        <img src={project.image} alt={project.title} />
      </section> */}

      <div className="container-fluid">

        <div className="project">
          <div className="project-info">
            <h1>
              {project.title}
            </h1>
            <p>
              {project.description}
            </p>
            {project.username && project.password && (
            <div className="test-credential-wrapper">
              <h4>TEST CREDENTIALS</h4>
              <TestCredential />
            </div>
              )}
            {project.hrefKey ? (<Button
            variant="full"
            hrefKey={project.hrefKey}>
              View live site
            </Button>) : ""}

          </div>

          <div className="project-stats">
            <h4>
              DATE
            </h4>
            <p>
              {project.date}
            </p>
            <h4>
              TEAM
            </h4>
            <p>
              {project.team}
            </p>
            <h4>
              MY ROLE
            </h4>
            <p>
              {project.role}
            </p>
          </div>

        </div>
        <div className="project-overview">
          <h4>
            OVERVIEW
          </h4>
          <p>
            {project.overview}
          </p>
        </div>
        <div className="project-process-wrapper">
          <div className="container-fluid">
            <div className="project-process">
              <ScrollReveal>
                <img src={project.image_process} className="my-svgs" alt="" />
              </ScrollReveal>


              <div className="content-process">
                <h4>
                  THE PROCESS
                </h4>
                <p>
                  {project.process}
                </p>
              </div>

              {project.image_process2 ?
              (<div className="fullwidth">
                <ScrollReveal>
                  <img src={project.image_process2} className="my-svgs" alt="" />
                </ScrollReveal>
              </div>) : ""}

            </div>
          </div>
        </div>
        <div className="challenges">
          <div>
            <h4>
              CHALLENGES
            </h4>
            <p>
              {project.challenges}
            </p>
          </div>
            <ScrollReveal>
              <img src={project.image_challenge} className="my-svgs" alt="" />
            </ScrollReveal>

        </div>
        <div className="learnings">
          {project.image_learnings1 ?
          (<ScrollReveal>
            <img src={project.image_learnings1} className="my-svgs" alt="" />
          </ScrollReveal>) : ""}
          <div>
            <h4>
              LEARNINGS & OUTCOMES
            </h4>
            <ul>
              {project.learnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
          </div>

          {project.image_learnings2 ?
          (<div className="fullwidth hide-on-mobile">
            <ScrollReveal>
              <img src={project.image_learnings2} className="my-svgs" alt="" />
            </ScrollReveal>
          </div>) : ""}

        </div>

      </div>
    </PageTransition>
    </>

  );
}
