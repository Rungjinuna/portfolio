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
        <li>Photoshop</li>
        <li>Illustrator</li>
        <li>Figma</li>
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
        <li>GTQ 포토샵 1급</li>
        <li>GTQi 일러스트 1급</li>
        <li>MOS master</li>
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
            안녕하세요! 저는 8년간 프리랜서 요가강사로 활동하며 다양한 사람들과
            소통하고, 책임감과 적응력을 길러왔습니다. 사람들과의 소통에 능하며,
            항상 긍정적인 에너지를 전하는 분위기 메이커입니다.이제는 프론트엔드
            개발자로 새로운 도전을 시작하려고 합니다. 배우려는 자세와 강한
            책임감으로 업무에 빠르게 적응하며, 팀원들과 협력하여 최고의 성과를
            만들어내는 것을 목표로 하고 있습니다. 개발자로서의 여정을 통해
            새로운 기술을 익히고, 창의적인 문제 해결 능력을 발휘하며 성장해
            나가고 싶습니다. 감사합니다!
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
