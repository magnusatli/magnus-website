import React, {useEffect, useState} from "react";
import Image from "next/image";
import logo from "../public/assets/magLogo.png"
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu} from "react-icons/ai";
import {FaLinkedinIn, FaGithub, FaTwitter} from "react-icons/fa";



const Navbar = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [border, setBorder] = useState(false);
    useEffect(() => {
        const handleBorder = () => {
            if(window.scrollY > 90) {
                setBorder(true);
            } else {
                setBorder(false);
            }
        };
        window.addEventListener('scroll', handleBorder);
    }, []);

    const handleToggle = () => {
        setIsHidden(!isHidden);
    };

    return (
        <div className={border ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20 z-[100]"}>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Image src={logo} alt='Mag Logo' width={125} height={50}/>
                <div>
                    <ul className="hidden md:flex">
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b border-blue-500">Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className="ml-10 text-sm uppercase hover:border-b border-blue-500">About</li>
                        </Link>
                        <Link href="/#socials">
                            <li className="ml-10 text-sm uppercase hover:border-b border-blue-500">Socials</li>
                        </Link>
                        <Link href='/cv'>
                            <li className="ml-10 text-sm uppercase hover:border-b border-blue-500">CV</li>
                        </Link>
                    </ul>
                    <div className="md:hidden" onClick={handleToggle}>
                        <AiOutlineMenu className="md:hidden text-2xl" size={40}/>
                    </div>
                </div>
            </div>
            <div className={isHidden ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ""}>
                <div className={isHidden ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w:-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : "hidden"}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image src={logo} alt="Mag Logo" width={90} height={40}/>
                            <div onClick={handleToggle} className="rounded-full shadow-xl shadow-gray-500 p-3 cursor-pointer">
                                <AiOutlineClose></AiOutlineClose>
                            </div>
                        </div>
                    </div>
                    <div className="pt-10">
                        <ul className="border-t border-gray-400 ">
                            <Link href='/'>
                                <li onClick={()=> setIsHidden(false)} className="py-4 text-md">Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={()=> setIsHidden(false)} className="py-4 text-md">About</li>
                            </Link>
                            <Link href="/#socials">
                                <li onClick={()=> setIsHidden(false)} className="py-4 text-md">Socials</li>
                            </Link>
                            <Link href='/cv'>
                                <li onClick={()=> setIsHidden(false)} className="py-4 text-md">CV</li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest">My Socials</p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
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
            </div>
        </div>
    )
}


export default Navbar;