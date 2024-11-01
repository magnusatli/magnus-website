import React from 'react';
import aboutPhoto from '../public/assets/me.jpg';
import Image from 'next/image';
import SpotifyPlaylist from './SpotifyPlaylist';

const AboutMe = () => {
    return (
        <div id="about" className='w-full md:h-screen p-2 flex items-center'>
            <div className='max-w-[1240px] w-full h-full m-auto md:grid grid-cols-2 gap-8'>
                <div className='col-span-2'>
                    <h2 className='py-4 text-blue-600 flex justify-center'>About</h2>
                    <div className='w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                        <Image className='rounded-xl' src={aboutPhoto} alt="An image of Magnús Atli Gylfason" height={450} width={300}></Image>
                    </div>
                    <p className='py-2 text-gray-600 max-w-[95%] lg:w-[45%] m-auto dark:text-white'>
                        I have grown up with technology and started playing around with the family computer at a very young age.
                        In 2013 I took a course at Skema in Reykjavik, Iceland, where I learned more about programming and how to make simple video games.
                        I started taking programming seriously when I was deciding on a major, I read an introduction on Computer Science and my mind could not be changed from there.
                    </p>
                    <p className='py-2 text-gray-600 max-w-[95%] lg:w-[45%] m-auto dark:text-white'>
                        I have previously worked as Security at Keflavik Airport and therefore I am used to working under pressure and with a lot of responsibility.
                        I have also been a shift manager at a swimming pool. 
                    </p>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default AboutMe;