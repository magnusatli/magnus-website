import React from "react";
import {FaLinkedinIn, FaGithub, FaTwitter} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";

const Dashboard = () => {
    return (
        <div id="home" className='w-full h-screen text-center pt-20'>
            <div className="max-w[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="text-sm tracking-widest text-blue-600">Magnús Atli Gylfason</p>
                    <h2 className="py-2">Software Developer</h2>
                    <p className="py-4 text-gray-600 max-w-[80%] m-auto">
                        My name is Magnús Atli Gylfason and I am a software developer. 
                        I am currently studying at Reykjavik University.
                        Currently, my interests lay in web development and I am used to doing both front end work and back end work.
                        Current technologies that I am used to are React, Next.js(JavaScript), along with Dotnet Core and C# for backend work. 
                    </p>
                    <p className="py-4 text-gray-600 max-w-[80%] m-auto">
                        I am graduating with BSc. degree in Computer Science from Reykjavik University in Spring 2023.
                        I will completing my final project Spring 2023 as well.
                        I have finished many courses in Reykjavik University on Design and Development of Software using many different programming languages.
                        C++, C and of course Python are an example of the languages that I have used. 
                        This website was developed using Next.js and Tailwind css.
                    </p>
                    <div className="flex items-center justify-between max-w-[400px] m-auto py-4 border rounded border-blue-600 p-4">
                        <a href="https://www.linkedin.com/in/magn%C3%BAs-atli-gylfason-451555251/" target='_blank' rel='noreferrer'>
                            <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                                <FaLinkedinIn/>
                            </div>
                        </a>
                        <a href="https://github.com/magnusatli" target='_blank' rel='noreferrer'>
                            <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                                <FaGithub/>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/magn%C3%BAs-atli-gylfason-451555251/" target='_blank' rel='noreferrer'>
                            <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                                <AiOutlineMail/>
                            </div>
                        </a>
                        <a href="https://twitter.com/magnusatli1" target='_blank' rel='noreferrer'>
                            <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                                <FaTwitter/>
                            </div>
                        </a>
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default Dashboard;