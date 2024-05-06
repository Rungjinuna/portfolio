import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'React Portfolio WebSite',
    description: 'Project 1 description',
    image: '/images/projects/1.png',
    tag: ['All', 'Web'],
  },
  {
    id: 2,
    title: 'Weather Application',
    description: 'Project 2 description',
    image: '/images/projects/4.png',
    tag: ['All', 'Web'],
  },
  {
    id: 3,
    title: 'Chatting Application',
    description: 'Project 3 description',
    image: '/images/projects/5.png',
    tag: ['All', 'Web'],
  },
  {
    id: 4,
    title: 'Web IDE Application',
    description: 'Project 4 description',
    image: '/images/projects/6.png',
    tag: ['All', 'Web'],
  },
  {
    id: 5,
    title: 'Travel itinerary sharing Application',
    description: 'Project 5 description',
    image: '/images/projects/1.png',
    tag: ['All', 'Web'],
  },
];
const ProjectSection = () => {
  return (
    <>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Projects
      </h2>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
