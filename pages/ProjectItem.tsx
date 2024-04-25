import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

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

export default ProjectItem