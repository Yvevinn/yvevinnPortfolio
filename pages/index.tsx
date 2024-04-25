import EventEmitter from "events";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "../public/assets/logo.png";
import AboutMe from "./aboutme";
import Contact from "./contact";
import Education from "./education";
import Projects from "./project";
import Skills from "./skill";
import WorkExperience from "./workex";
EventEmitter.defaultMaxListeners = 20;

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("AboutMe");
  useEffect(() => {
    setActiveSection("AboutMe");
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gray-500 text-white py-4 fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="mr-6">
            <a href="#" onClick={() => window.scrollTo(0, 0)}>
              <Image src={logo} alt="Logo" className="h-10 w-20" />
            </a>
          </div>
          {/* Navigation Buttons */}
          <div className="flex justify-end flex-grow">
            <Link
              to="about-me"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              className={`text-xl font-bold cursor-pointer focus:outline-none mr-4 ${
                activeSection === "AboutMe" ? "border-b-2 border-white" : ""
              }`}
              onClick={() => setActiveSection("AboutMe")}
            >
              About Me
            </Link>
            <Link
              to="education"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              className={`text-xl font-bold cursor-pointer focus:outline-none mr-4 ${
                activeSection === "Education" ? "border-b-2 border-white" : ""
              }`}
              onClick={() => setActiveSection("Education")}
            >
              Education
            </Link>
            <Link
              to="work-experience"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              className={`text-xl font-bold cursor-pointer focus:outline-none mr-4 ${
                activeSection === "WorkExperience" ? "border-b-2 border-white" : ""
              }`}
              onClick={() => setActiveSection("WorkExperience")}
            >
              Work Experience
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              className={`text-xl font-bold cursor-pointer focus:outline-none mr-4 ${
                activeSection === "Skills" ? "border-b-2 border-white" : ""
              }`}
              onClick={() => setActiveSection("Skills")}
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              className={`text-xl font-bold cursor-pointer focus:outline-none mr-4 ${
                activeSection === "Projects" ? "border-b-2 border-white" : ""
              }`}
              onClick={() => setActiveSection("Projects")}
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              className={`text-xl font-bold cursor-pointer focus:outline-none ${
                activeSection === "Contact" ? "border-b-2 border-white" : ""
              }`}
              onClick={() => setActiveSection("Contact")}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div id="about-me" className="mb-16">
            <AboutMe />
          </div>
          <div id="education" className="mb-16">
            <Education />
          </div>
          <div id="work-experience" className="mb-16">
            <WorkExperience />
          </div>
          <div id="skills" className="mb-16">
            <Skills />
          </div>
          <div id="projects" className="mb-16">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
