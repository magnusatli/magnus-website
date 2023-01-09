import React from 'react'
import {FaLinkedinIn, FaTwitter, FaGithub} from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const SocialBox = () => {
  return (
    <div id='socials' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest text-blue-600 flex justify-center items-center'>My Socials</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <FaLinkedinIn/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>LinkedIn</h3> 
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <FaGithub/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Github</h3> 
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <AiOutlineMail/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Mail</h3> 
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <FaTwitter/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Twitter</h3> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SocialBox