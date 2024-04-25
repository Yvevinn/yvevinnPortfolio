import React from "react";

const Contact: React.FC = () => {
    return (
        <div id='education' className='w-full lg:h-screen p-2 py-10'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center px-2 py-16'>
                <p className='uppercase text-3xl md:text-4xl tracking-widest text-[#5651e5] mb-4'>
                    Contact
                </p>
                <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-8'>Let&apos;s talk</h2>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone:</label>
                            <input type="tel" id="phone" name="phone" value="+60-1137881612" className="w-full bg-gray-200 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                            <input type="email" id="email" name="email" value="yvevinntan0722@gmail.com" className="w-full bg-gray-200 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address:</label>
                            <input type="text" id="address" name="address" value="UCSI Residence 2, KL" className="w-full bg-gray-200 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
