import React from 'react'
import Link from 'next/link'
import {FaLinkedinIn, FaTwitter, FaGithub} from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const SocialBox = () => {
    return (
        <div id='socials' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center'>
            <h2 className='py-4 text-blue-600 flex justify-center'>My Socials</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <Link href="https://www.linkedin.com/in/magn%C3%BAs-atli-gylfason-451555251/" target='_blank' rel='noreferrer'>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                    <div className='m-auto'>
                                        <FaLinkedinIn className='dark:fill-white'/>
                                    </div>
                                    <div className='flex flex-col items-center justify-center'>
                                        <h3 className='dark:text-white'>LinkedIn</h3> 
                                    </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="https://github.com/magnusatli" target='_blank' rel='noreferrer'>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <FaGithub className='dark:fill-white'/>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='dark:text-white'>Github</h3> 
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href='mailto:magjrgylfason@gmail.com' target='_blank' rel='noreferrer'>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <AiOutlineMail className='dark:fill-white'/>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='dark:text-white'>Mail</h3> 
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="https://twitter.com/magnusatli1" target='_blank' rel='noreferrer'>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <FaTwitter className='dark:fill-white'/>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='dark:text-white'>Twitter</h3> 
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SocialBox