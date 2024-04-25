// AboutMe.tsx
import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import profile from "../public/assets/profile.jpg";

const AboutMe: React.FC = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 py-10'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-center px-2 py-16'>
                <div className='md:col-span-3'>
                    <p className='uppercase text-3xl md:text-4xl tracking-widest text-[#5651e5] mb-4'>
                        About
                    </p>
                    <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-8'>Who I Am</h2>
                    <p className='py-2 text-lg md:text-xl text-gray-600 leading-tight'>
                        Motivated Computer Science student with a strong foundation in programming languages such as HTML, Python, Java, and C++. Currently pursuing a Bachelor degree in Computer Science at UCSI University, with a passion for solving complex problems and developing innovative solutions. Skilled in database management with SQL and experienced in using various software development tools and frameworks. Proven ability to work effectively in team environments and adapt to new challenges. Seeking an internship opportunity to further develop my technical skills and contribute to cutting-edge projects in the field of computer science.
                    </p>
                    <Link to="projects" smooth={true} duration={500}>
                        <p className='py-2 text-lg md:text-xl text-gray-600 underline cursor-pointer'>
                            Check out some of my latest projects
                        </p>
                    </Link>
                </div>
                <div className='md:col-span-2 max-w-[300px] md:max-w-[350px] m-auto shadow-2xl'>
                    <Image src={profile} className='rounded-xl shadow-2xl' width={300} height={300} alt='/' />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
