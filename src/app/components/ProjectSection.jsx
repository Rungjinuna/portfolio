'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'React Portfolio WebSite',
    description: '포트폴리오를 위한 Next.js를 사용한 웹',
    image: '/images/projects/10.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Rungjinuna/portfolio',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'Weather Application',
    description: '지역을 검색해 날씨를 알 수있는 웹 서비스',
    image: '/images/projects/1.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Rungjinuna/weather_app',
    previewUrl: '/',
  },
  {
    id: 3,
    title: 'Chatting Application',
    description: '간단한 채팅이 가능한 Next.js 웹서비스',
    image: '/images/projects/6.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Rungjinuna/chat_app',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'Web IDE Application',
    description: '구름 풀스택 과정에서 진행한 Web IDE 애플리케이션',
    image: '/images/projects/11.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Rungjinuna/ide-front',
    previewUrl: '/',
  },
  {
    id: 5,
    title: 'Travel itinerary sharing Application',
    description:
      '구름 풀스택 과정에서 진행한 자유 주제 애플리케이션, 여행일정을 공유할 수 있는 웹 서비스',
    image: '/images/projects/13.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Rungjinuna/footprint-front',
    previewUrl: '/',
  },
];
const ProjectSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section ref={ref}>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag
          onClick={handleTagChange}
          name='All'
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Web'
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Mobile'
          isSelected={tag === 'Mobile'}
        />
      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
