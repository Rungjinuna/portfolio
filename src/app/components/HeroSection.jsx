'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              Hello, I am{' '}
            </div>
            <TypeAnimation
              sequence={['Eunsol ', 1000, 'Web Developer', 1000]}
              wrapper='span'
              speed={30}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            optio quas doloribus ipsum quaerat facere? Ut ullam quis quo
            temporibus maiores, ratione quae nisi tempore pariatur debitis
            consequatur eum eos.
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
              Hire me
            </button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3 '>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0 mb-6 lg:text-xl'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative'>
            <Image
              src='/images/profile3.png'
              alt='Eunsol profile image'
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              width={230}
              height={230}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
