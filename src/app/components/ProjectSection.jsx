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
    role: '포트폴리오 전체 제작',
    image: '/images/projects/10.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Rungjinuna/portfolio',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'Weather Application',
    description: '지역을 검색해 날씨를 알 수있는 웹 서비스',
    role: '몽고디비사용 및 UI,UX 전체 제작',
    image: '/images/projects/1.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Rungjinuna/weather_app',
    previewUrl: '/WeatherApp',
  },
  {
    id: 3,
    title: 'Weather Application',
    description: '한눈에 날짜별 날씨를 알 수 있는 웹 서비스',
    role: 'UI 전체 제작',
    image: '/images/projects/14.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Rungjinuna/weather_app_next_14',
    previewUrl: '/WeatherApp2',
  },
  {
    id: 4,
    title: 'Chatting Application',
    description: '간단한 채팅이 가능한 웹서비스',
    role: 'UI 전체 제작 (웹소켓사용)',
    image: '/images/projects/6.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Rungjinuna/chat_app',
    previewUrl: '/ChattingApp',
  },
  {
    id: 5,
    title: 'Web IDE Application',
    description: '구름 풀스택 과정에서 진행한 Web IDE 애플리케이션',
    role: 'UI 디자인 및 전체 제작 및 웹 IDE 기능개발, 파일트리 기능 개발, 콘테이너 기능개발',
    image: '/images/projects/11.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Rungjinuna/ide-front',
    previewUrl: '/WebIdeApp',
  },
  {
    id: 6,
    title: 'Travel itinerary sharing Application',
    description:
      '구름 풀스택 과정에서 진행한 자유 주제 애플리케이션, 여행일정을 공유할 수 있는 웹 서비스',
    role: 'UI 디자인, 일정생성, 일정조회, 검색 페이지 UI 및 기능개발',
    image: '/images/projects/13.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Rungjinuna/footprint-front',
    previewUrl: '/TravelApp',
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
              role={project.role}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
