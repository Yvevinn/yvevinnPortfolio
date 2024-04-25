import React from "react";

const WorkExperience: React.FC = () => {
    return (
        <div id='education' className='w-full lg:h-screen p-2 py-10'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center px-2 py-16'>
                <p className='uppercase text-3xl md:text-4xl tracking-widest text-[#5651e5] mb-4'>
                    Work
                </p>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-8'>My Working Experience</h2>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Work Experience</h2>
                    <div className="grid gap-6">
                        <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="text-xl font-semibold mb-2">IT Intern at WMA</h3>
                            <p className="text-gray-600 mb-2">Sept 2021 - Dec 2021</p>
                            <p className="text-gray-700">
                                Developed and implemented auto-reply function for Telegram and Facebook platforms to facilitate quicker responses to customer inquiries. Utilized Telegram bot systems like BotFather and Manybot, and MessageBird for Facebook, to set up automated response systems. Developed website using Bootstrap Studio. Designed user interfaces (UI) for various projects using Figma, ensuring intuitive and visually appealing designs. Collaborated with team members to create UI mockups and prototypes, incorporating feedback for iterative improvements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;