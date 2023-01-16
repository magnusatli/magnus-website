import React from 'react'
import Link from 'next/link'
import { GoGitBranch } from 'react-icons/go'

const Projects = () => {
  return (
    <div id="projects" className='w-full h-screen p-2 flex items-center'>
        <div className='max-w-[1240px] w-full h-[50%] m-auto gap-8'>
            <h2 className='py-4 text-blue-600 flex justify-center'>Projects</h2>
                <p className='py-2 text-gray-600 max-w-[95%] lg:w-[50%] m-auto dark:text-white'>
                    Currently, my only personal project that I can show off is this website, but this site will showcase future projects.
                    The GitHub repository for this website can be accessed below. 
                </p>
                
                <div className='p-4 shadow-xl m-auto rounded-xl hover:scale-105 ease-in duration-300 w-[60%]'>
                    <Link href="https://github.com/magnusatli/magnus-website" target='_blank' rel='noreferrer'>
                        <div className='p-6 grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <GoGitBranch className='h-[50px] w-[50px] rounded-xl shadow-lg shadow-gray-500 dark:fill-white'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='dark:text-white'>Website repository</h3> 
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default Projects