'use client';
import Image from 'next/image';
import React, { useState, useTransition } from 'react';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>JavaScript</li>
        <li>React</li>
        <li>TypeScript</li>
        <li>Redux</li>
        <li>Recoil</li>
        <li>Next.js</li>
        <li>Node.js</li>
      </ul>
    ),
  },
  {
    title: 'education',
    id: 'education',
    content: (
      <ul className='list-disc pl-2'>
        <li>국민대학교 정치외교학과 졸업</li>
        <li>구름톤 트레이닝 풀스택 개발자과정</li>
      </ul>
    ),
  },
  {
    title: 'certifications',
    id: 'certifications',
    content: (
      <ul className='list-disc pl-2'>
        <li>국민대학교 정치외교학과 학사</li>
        <li>구름톤 트레이닝 풀스택 개발자과정 수료</li>
      </ul>
    ),
  },
];

const AboutSections = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image
          src='/images/coding.png'
          width={500}
          height={500}
          alt='coding image'
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            harum nostrum, velit iusto nihil ut obcaecati pariatur quasi facilis
            magni soluta incidunt odio veritatis est quas, sunt, temporibus
            dignissimos ad?
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              Certifications
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSections;
