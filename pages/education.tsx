import React from "react";

const Education: React.FC = () => {
    return (
        <div id='education' className='w-full lg:h-screen p-2 py-10'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center px-2 py-16'>
                <p className='uppercase text-3xl md:text-4xl tracking-widest text-[#5651e5] mb-4'>
                    Education
                </p>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-8'>My Education Background</h2>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border-l-4 border-blue-500 pl-4">
                            <p className="font-bold text-xl mb-1">2020 - 2022</p>
                            <p className="text-gray-600 mb-2">Diploma in Information Technology</p>
                            <p className="text-gray-600">UCSI UNIVERSITY</p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                            <p className="font-bold text-xl mb-1">2022 - 2024</p>
                            <p className="text-gray-600 mb-2">Bachelor of Computer Science (Honours)</p>
                            <p className="text-gray-600">UCSI UNIVERSITY</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Education;