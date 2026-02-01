import Button from "../components/Button";
import PageTransition from "../components/PageTransition";
import "./About.css";
import Alex from "../assets/ALEX.svg";
import React from "../assets/React-icon.svg";
import Rails from "../assets/Rails.png";
import Bootstrap from "../assets/Bootstrap.svg";
import Postgres from "../assets/PostgresSQL.svg";
import JS from "../assets/JavaScript.svg";
import Ruby from "../assets/Ruby.svg";
import HTML from "../assets/HTML5.svg";
import CSS from "../assets/CSS3.svg";
import { useState } from "react";



function CertificatesAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container-fluid">
      <div className="certificates accordion-only">
        <h2 className="subheader">CERTIFICATES</h2>

        <button
          className={`accordion-title ${openIndex === 0 ? "open" : ""}`}
          onClick={() => toggle(0)}
        >
          <span>Le Wagon Web Dev Bootcamp '25</span>

          <svg
            className={`chevron ${openIndex === 0 ? "open" : ""}`}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            aria-hidden="true"
            >
          <path
            d="M6 9l6 6 6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          </svg>
        </button>

        <div className={`accordion-content ${openIndex === 0 ? "open" : ""}`}>
          <p>
            Completed a 9-month part time bootcamp focusing on HTML, CSS, JS,
            PostgreSQL & Ruby on Rails. Built two fullstack Rails apps:
            PestControlPets and FoodieFeed. Worked in teams using Git and agile
            workflows.
          </p>
        </div>

        <button
          className={`accordion-title ${openIndex === 1 ? "open" : ""}`}
          onClick={() => toggle(1)}
        >
          <span>META React Specialization '25</span>

          <svg
            className={`chevron ${openIndex === 1 ? "open" : ""}`}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            aria-hidden="true"
            >
          <path
            d="M6 9l6 6 6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          </svg>
        </button>
        <div className={`accordion-content ${openIndex === 1 ? "open" : ""}`}>
          <p>
            Deep dive into React fundamentals including component structure,
            hooks, and state management through META’s React curriculum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <PageTransition>
      <div className="container-fluid">

            <div className="bio">
              <img className="profile" src={Alex} alt="Alex" />
              <div className="bio-text">
                <h1 className="about-header">A bit about me</h1>
                <p>
                  I’m Alex. Lover of great food, collector of whisky (not in a pretentious way, I promise), and father of one.
                </p>
                <p>
                  A sound engineer by trade for the past 12 years, I have recently decided to pivot in to the tech space.
                </p>
                <p>
                  To that end I recently completed a bootcamp at Le Wagon in part time and am now eager to find my first position in the tech realm!
                  If you're looking for a junior dev at your company please reach out! 🚀
                </p>
                <div>
                  <Button variant="ghost" hrefKey="github">GitHub</Button>
                  <Button variant="ghost" hrefKey="linkedin">LinkedIn</Button>
                  <Button variant="ghost" hrefKey="resume">Resume</Button>
                </div>
              </div>
            </div>
            <div className="stack">
              <div>
                <div className="languages">
                  <h2 className="subheader">
                    LANGUAGES, FRAMEWORKS & LIBRARIES
                  </h2>
                  <div className="logos">
                    <img src={JS} alt="Javascript" />
                    <img src={Ruby} alt="Ruby" />
                    <img src={HTML} alt="HTML" />
                    <img src={CSS} alt="CSS" />
                    <img src={React} alt="React.js" />
                    <img src={Rails} alt="Ruby on Rails" />
                    <img src={Postgres} alt="PostgreSQL" />
                    <img src={Bootstrap} alt="Bootstrap" />
                  </div>
                </div>
                <div className="certificates-wrapper">
                  <CertificatesAccordion />
                <div className="certificates desktop-only">
                  <h2 className="subheader">
                    CERTIFICATES
                  </h2>
                  <h4>
                    Le Wagon Web Dev Bootcamp '25
                  </h4>
                  <p>
                    Completed a 9-month part time bootcamp focusing on learning HTML, CSS, JS, PostgreSQL & Ruby On Rails.
                    During the final weeks we had to complete two fullstack Rails projects: an AirBnb clone (PestControlPets) & a project of our own (FoodieFeed) to complete the bootcamp.
                    For this purpose we had to work in teams & were able to get a first impression of professional workfflows in the tech space using version tracking with Git & agile metholodgies using Trello.
                  </p>
                  <h4>
                    META React Specialization '25
                  </h4>
                  <p>
                    After completing the bootcamp I decided to take a deeper dive into React as it is a leading JavaScript Framework for frontend developement.
                    I chose Coursera for its selfpaced curricullum & specifally META since React's roots are found here. I learnt about component structure, hooks and state.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </PageTransition>
  );
}
