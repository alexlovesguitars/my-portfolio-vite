import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/layout/Header.jsx";

import Home from "./pages/Home.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ProjectHeader from "./components/layout/ProjectHeader.jsx"

export default function App() {

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
