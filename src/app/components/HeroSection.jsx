'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-7 place-self-center text-center sm:text-left'
        >
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              Hello, I am{' '}
            </span>
            <br></br>
            <TypeAnimation
              sequence={['Eunsol ', 1000, 'Web Developer', 1000]}
              wrapper='span'
              speed={30}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl'>
            안녕하세요, 저는 신입 프론트엔드 개발자 김은솔입니다. 사용자 경험을
            최우선으로 생각하는 인터페이스를 만드는 것에 열정을 가지고 있습니다.
            HTML, CSS, JavaScript를 비롯한 다양한 프론트엔드 기술 스택을
            학습하고 프로젝트에 적용해 왔습니다. React 프레임워크를 사용해본
            경험이 있으며, 사용자 친화적인 웹 애플리케이션을 개발하는 데 자신이
            있습니다. 항상 배우고 성장하는 자세로 임하며, 팀의 목표를 달성하는
            데 기여할 수 있는 개발자가 되고 싶습니다. 감사합니다.
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
              Hire me
            </button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3 '>
              {/* <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                Download CV
              </span> */}
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-4 place-self-center mt-4 lg:mt-0 mb-6 lg:text-xl'
        >
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative'>
            <Image
              src='/images/profile3.png'
              alt='Eunsol profile image'
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              width={230}
              height={230}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
