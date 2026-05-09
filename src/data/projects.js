import FoodieFeedCover from "../assets/thumbnails/FoodieFeed_Thumbnail.webp";
import PCP from "../assets/thumbnails/PCP_Thumbnail.webp";
import Portfolio from "../assets/thumbnails/Project_Thumb_Portfolio.webp";
import ReactLogo from "../assets/icons/React-icon.svg";
import Rails from "../assets/icons/Rails.png";
import FFSchema from "../assets/projects/FF_Schema.png";
import FFFlow from "../assets/projects/FF_Flow.png";
import FFTrello from "../assets/projects/FF_Trello.png";
import FFMain from "../assets/projects/FF_Main.png";
import FFModal from "../assets/projects/FF_Modal.png";
import PCPUserStories from "../assets/projects/PCP_UserStories.png";
import PCPList from "../assets/projects/PCP_List.png";
import PCPToulousse from "../assets/projects/PCP_Toulouse.png";
import PortfolioStyles from "../assets/projects/Portfolio_Styles.png";
import PortfolioScreens from "../assets/projects/Portfolio_Screens.png";
import PortfolioDanni from "../assets/thumbnails/Design_Thumb_Portfolio_2.webp";
import NextJSLogo from "../assets/icons/nextjs.svg";

export const projects = [
  {
    title: "FoodieFeed",
    slug: "foodiefeed",
    info: "Ruby On Rails / Hotwire / Javascript / HTML / CSS",
    image: FoodieFeedCover,
    imageAlt: "Foodie Feed",
    image_process: FFSchema,
    image_process2: FFFlow,
    image_challenge: FFTrello,
    image_learnings1: FFMain,
    image_learnings2: FFModal,
    language: Rails,
    languageAlt: "Ruby On Rails",
    description: "FoodieFeed is a full-stack Ruby on Rails web application designed for food lovers who want a food-centric social platform. The app allows users to follow foodie influencers, collect recipes, and explore food and travel content in one place. The project was developed as a Minimum Viable Product (MVP).",
    overview: "The brief was to create a fun, original web application that either solved a real-world problem or reflected something personally meaningful to the team. As the project initiator, I proposed a concept centered around food and travel—two areas I’m passionate about. The focus was on delivering a well-structured MVP rather than a fully production-ready product.",
    process: "Before writing any code, we planned the application architecture by designing wireframes, database schemas, and defining all routes. Given the tight timeline, we reviewed our approach with teaching assistants early on to validate feasibility. We collaborated remotely across different countries using Git, the CLI, and pull requests to work in parallel.",
    challenges: "The biggest challenge was maintaining focus and scope control. As beginner developers, we were eager to experiment and personalize features, which occasionally distracted us from core functionality. I also found myself spending too much time refining small UI details instead of prioritizing essential MVP features—an important lesson reinforced during project check-ins. As team lead, I set up a Trello board, assigned tasks based on individual strengths, and split the workload by routes and pages.",
    learnings: ["Clear prioritization and well-defined responsibilities in a team environment", "Focusing on core functionality over visual polish to deliver a stable MVP", "Writing clean, maintainable code is more valuable than adding flashy features", "Gained hands-on experience with Turbo Frames and JavaScript within Rails, which sparked my interest in deepening my frontend and JavaScript expertise post-bootcamp"],
    tech: ["Rails", "PostgreSQL", "Hotwire", "Stimulus.js"],
    repo: ["https://github.com/alexlovesguitars/FoodieFeed"],
    date: "April 2025",
    team: ["Dominique Bertisch, François Kergaravat"],
    role: "Team Lead with Frontend Focus",
    hrefKey: "foodiefeed",
    username: "test@test.com",
    password: "test1user",
    btnname: "View Demo"
  },
  {
    title: "Pest Control Pets",
    slug: "pcp",
    info: "Ruby On Rails / Hotwire / Javascript / HTML / CSS",
    image: PCP,
    imageAlt: "PCP Project",
    image_process: PCPUserStories,
    image_challenge: PCPList,
    image_learnings1: PCPToulousse,
    language: Rails,
    languageAlt: "Ruby On Rails",
    description: "PestControlPets is a full-stack Ruby on Rails application that allows users to rent animals to help control pests in their homes. The project is a playful take on the AirBnB business model and was built during the final weeks of the bootcamp.",
    overview: "Alongside developing FoodieFeed, we were tasked with building an AirBnB-style marketplace. We decided on a humorous and creative concept that still closely mirrored AirBnB’s core functionality, including listings, bookings, and user accounts.",
    process: "We followed a structured workflow similar to FoodieFeed—starting with wireframes, database schemas, and route planning. I organized task distribution via Trello, ensuring each team member worked on a balanced mix of frontend and backend features.Collaboration was handled through Git, CLI workflows, and Slack for day-to-day communication.",
    challenges: "The main challenge was staying disciplined and not over-engineering features. While the AirBnB clone had a clear reference point, it was still tempting to explore additional frameworks and components beyond the project’s scope.",
    learnings: ["Reinforced the value of scope management and prioritization", "Improved confidence working from an existing product blueprint", "Strengthened collaboration and leadership skills under tight deadlines", "Continued focus on writing clean, reliable, and scalable code"],
    tech: ["Rails", "PostgreSQL", "Hotwire", "Stimulus.js"],
    repo: ["https://github.com/alexlovesguitars/PestControlPets"],
    date: "March 2025",
    team: ["Dominique Bertisch, François Kergaravat"],
    role: "Team Lead with Frontend Focus",
    hrefKey: "pestcontrolpets",
    username: "test_user@test.com",
    password: "test1user",
    btnname: "View Demo"
  },
  {
    title: "My Portfolio",
    slug: "portfolio_alex",
    info: "JavaScript / React+Vite / Motion / CSS",
    image: Portfolio,
    imageAlt: "Portfolio",
    image_process: PortfolioStyles,
    image_challenge: PortfolioScreens,
    language: ReactLogo,
    languageAlt: "React",
    description: "A modern, frontend-focused portfolio built with React and Vite, deployed on Vercel. The site showcases my projects, skills, and ongoing work using statically managed content and assets, prioritizing performance, simplicity, and maintainability. It also serves as a sandbox for experimenting with animations, routing, and component architecture.",
    overview: "After completing the bootcamp, I chose to deepen my JavaScript and frontend expertise, as this was the area I enjoyed most. I completed Meta’s React courses and applied those learnings by building a production-ready portfolio application from scratch, focusing on component architecture, routing, and performance.",
    process: "The project followed a real-world designer–developer workflow. A complete design system and Figma files were provided, which I translated into reusable React components. I had full ownership of the technical stack and implementation, including project setup with Vite, routing with React Router, state and component structure, and deployment to Vercel. Features and pages were reviewed and QA’d collaboratively once implemented.",
    challenges: "Coming back to coding after a short break and learning React at the same time required deliberate ramp-up. Early design concepts assumed Bootstrap for responsiveness, but I intentionally removed framework dependencies to gain deeper control over layout and styling. This increased development time but resulted in cleaner CSS and better understanding of responsive behavior.",
    learnings: ["Built a fully responsive layout without CSS frameworks, using Flexbox, CSS Grid, and media queries", "Designed reusable, composable React components with clear separation of concerns", "Built a custom Hook for Mobile vs Desktop Menu", "Implemented client-side navigation using React Router for a multi-page SPA experience", "Integrated Framer Motion for page transitions and UI animations without compromising performance", "Gained hands-on experience deploying and iterating quickly using Vercel’s CI/CD pipeline", "Learned how to work effectively with a design system and collaborate with a dedicated designer in a production-style workflow"],
    tech: ["JavaScript", "React+Vite", "CSS", "Motion"],
    repo: "https://github.com/alexlovesguitars/my-portfolio-vite",
    date: "January / February 2026",
    team: ["Danielle Pfitzner (Design & QA)"],
    role: "Developer"
  },
  {
    title: "Design Portfolio",
    slug: "portfolio_danni",
    info: "Next.js / React / TailwindCSS / Vercel",
    image: PortfolioDanni,
    imageAlt: "Design Portfolio Danni Pfitzner",
    image_process: PortfolioStyles,
    image_challenge: PortfolioScreens,
    language: NextJSLogo,
    languageAlt: "Next",
    description: "A modern frontend-focused portfolio rebuilt from my wife's original design portfolio, which was first launched on Squarespace. Recreated with Next.js, React, and deployed on Vercel, the project served as both a faithful redevelopment of an existing site and an introduction to the Next.js ecosystem. It provided hands-on experience with file-based routing, static content management, and component-driven architecture, while emphasizing performance, simplicity, and maintainability.",
    overview: "Given my focus on JavaScript and frontend development, I chose to rebuild my wife’s design portfolio using Next.js. The project involved translating an existing Squarespace site into a modern React-based application, while maintaining the original design and content structure. This allowed me to gain practical experience with Next.js features like file-based routing and static site generation.",
    process: "The project followed a real-world designer–developer workflow. I was responsible for the technical implementation, including project setup, routing, component architecture, and deployment. The design was already established, so my focus was on faithfully translating it into code while optimizing for performance and maintainability. I collaborated with my wife for content updates and QA throughout the development process.",
    challenges: "The main challenge was faithfully recreating an existing Squarespace design in Next.js and React while adapting it to a fully custom codebase. As my first project with Next.js, Tailwind CSS, and basic TypeScript, I had to learn file-based routing, static site generation, utility-first styling, and prop typing while ensuring the site was fully responsive and maintainable. Balancing visual accuracy with clean, component-driven architecture made the project both challenging and highly educational.",
    learnings: ["Built a fully responsive layout using Tailwind CSS, leveraging utility classes for rapid styling and responsive design", "Designed reusable React components with clear separation of concerns, improving maintainability and scalability", "Implemented file-based routing with Next.js to create a multi-page application without additional routing libraries", "Gained hands-on experience with Next.js features like static site generation and server-side rendering", "Learned how to manage static assets and optimize images for performance in a Next.js application", "Deployed the application using Vercel’s CI/CD pipeline, enabling quick iterations and updates", "Gained introductory experience with TypeScript for typing React component props, enhancing code reliability and developer experience"],
    tech: ["Next.js", "Vercel", "TailwindCSS", "React"],
    repo: "https://github.com/alexlovesguitars/dannipfitzner-portfolio",
    date: "April 2026",
    hrefKey: "danniportfolio",
    team: ["Danielle Pfitzner (Design & QA)"],
    role: "Developer",
    btnname: "View Portfolio"
  },
];
