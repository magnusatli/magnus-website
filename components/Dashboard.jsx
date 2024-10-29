import React from "react";
import Link from "next/link";
import {FaLinkedinIn, FaGithub, FaTwitter} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";

const Dashboard = () => {
    return (
        <div id="home" className='w-full h-screen text-center pt-20'>
            <div className="max-w[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="text-sm tracking-widest text-blue-600">Software Developer</p>
                    <h2 className="py-2 dark:text-purple-500">Magnús Atli Gylfason</h2>
                    <p className="py-4 text-gray-600 max-w-[95%] lg:w-[30%] m-auto dark:text-white text-left">
                        My name is Magnús Atli Gylfason and I am a software developer. 
                        I studied at Reykjavik University from 2020 till 2023 in Computer Science.
                        Currently, my interests lay in web development and I am used to doing both front end work and back end work.
                        Current technologies that I am used to are Next.js, TypeScript along with .NET and C# for backend work. 
                    </p>
                    <p className="py-4 text-gray-600 max-w-[95%] lg:w-[30%] m-auto dark:text-white text-left">
                        I graduated with BSc. degree in Computer Science from Reykjavik University in 2023, since then I have been working, mostly as a front-end developer.
                        I have finished many courses in Reykjavik University on Design and Development of Software using many different programming languages.
                        C++, C and of course Python are an example of the languages that I have used. 
                        This website was developed using Next.js and Tailwind CSS.
                    </p>
                    <div className="pt-4">
                        <div className="flex items-center justify-between max-w-[450px] m-auto py-4  rounded-2xl p-4">
                            <Link href="https://www.linkedin.com/in/magn%C3%BAs-atli-gylfason-451555251/" target='_blank' rel='noreferrer'>
                                <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                                    <FaLinkedinIn className="dark:fill-white"/>
                                </div>
                            </Link>
                            <Link href="https://github.com/magnusatli" target='_blank' rel='noreferrer'>
                                <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                                    <FaGithub className="dark:fill-white"/>
                                </div>
                            </Link>
                            <Link href='mailto:magjrgylfason@gmail.com' target='_blank' rel='noreferrer'>
                                <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                                    <AiOutlineMail className="dark:fill-white"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default Dashboard;