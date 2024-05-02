import EventEmitter from "events";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Element, Link } from "react-scroll";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    setActiveSection("AboutMe");
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gray-500 text-white py-3 px-2 fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex-1" style={{ maxWidth: '60px' }}>
            <a href="#" onClick={() => window.scrollTo(0, 0)}>
              <Image src={logo} alt="Logo" width={140} height={50} />
            </a>
          </div>
          {/* Hamburger menu for mobile */}
          <div className="lg:hidden">
            {mobileMenuOpen ? (
              <FaTimes onClick={toggleMobileMenu} className="text-3xl cursor-pointer" />
            ) : (
              <FaBars onClick={toggleMobileMenu} className="text-3xl cursor-pointer" />
            )}
          </div>
          {/* Mobile Menu Content */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-gray-400 p-5">
              {['AboutMe', 'Education', 'WorkExperience', 'Skills', 'Projects', 'Contact'].map((section) => (
                <Link
                  key={section}
                  to={section.toLowerCase()}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-50}
                  className="block text-white text-lg p-2"
                  onClick={() => {
                    setActiveSection(section);
                    toggleMobileMenu(); // Close menu after selection
                  }}
                >
                  {section.replace(/([A-Z])/g, ' $1').trim()}
                </Link>
              ))}
            </div>
          )}
          {/* desktop Navigation Buttons */}
          <div className="hidden lg:flex flex-grow justify-end">
            {['AboutMe', 'Education', 'WorkExperience', 'Skills', 'Projects', 'Contact'].map(section => (
              <Link
                key={section}
                to={section.toLowerCase()}
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
                className={`text-lg font-bold cursor-pointer focus:outline-none mx-4 ${
                  activeSection === section ? "border-b-2 border-white" : ""
                }`}
                onClick={() => setActiveSection(section)}
              >
                {section.replace(/([A-Z])/g, ' $1').trim()}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="relative z-10 pt-16">
        <div className="container mx-auto px-4 py-8">
          <Element name="aboutme" className="mb-16">
            <AboutMe />
          </Element>
          <Element name="education" className="mb-16">
            <Education />
          </Element>
          <Element name="workexperience" className="mb-16">
            <WorkExperience />
          </Element>
          <Element name="skills" className="mb-16">
            <Skills />
          </Element>
          <Element name="projects" className="mb-16">
            <Projects />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
        </div>
      </div>
    </div>
  );
};

export default Home;
