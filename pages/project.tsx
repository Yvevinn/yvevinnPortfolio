import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from "react";
import eduImg from "../public/assets/edureserve.png";
import hgkImg from "../public/assets/hgk.png";
import transImg from "../public/assets/transport.png";

const Projects: React.FC = () => {
    interface ProjectItemProps {
        title: string;
        backgroundImg: StaticImageData;
        tech: string;
        projectUrl: string;
    }

    const ProjectItem: React.FC<ProjectItemProps> = ({ title, backgroundImg, tech, projectUrl }) => {
        return (
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt={title} width={500} height={300} />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
                    <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                    <p className='py-2 text-white text-center'>{tech}</p>
                    <Link href={projectUrl}>
                        <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer' role="button" tabIndex={0}>
                            More Info
                        </p>
                    </Link>
                </div>
            </div>
        );
    };

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
