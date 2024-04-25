import React from "react";
import eduImg from "../public/assets/edureserve.png";
import hgkImg from "../public/assets/hgk.png";
import transImg from "../public/assets/transport.png";
import ProjectItem from "./ProjectItem";

const Projects: React.FC = () => {
    return (
        <div id='projects' className='w-full md:h-screen p-2 py-10'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='uppercase text-3xl md:text-4xl tracking-widest text-[#5651e5] mb-4'>
                    Projects
                </p>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-8'>What I&apos;ve Built</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <ProjectItem
                        title='HappyGo Kiddo App'
                        backgroundImg={hgkImg}
                        projectUrl=''
                        tech='HTML, CSS, JavaScript, React Native, Firebase'
                    />
                    <ProjectItem
                        title='University Room Booking System'
                        backgroundImg={eduImg}
                        projectUrl=''
                        tech='HTML, CSS, JavaScript, PHP, Laravel'
                    />
                    <ProjectItem
                        title='Public Transport Road Planning App Design'
                        backgroundImg={transImg}
                        projectUrl=''
                        tech='Figma'
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
