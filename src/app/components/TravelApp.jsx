import Image from 'next/image';
import React from 'react';

const TravelApp = () => {
  const images = [
    {
      src: '/images/projects/18.png',
      width: 500,
      height: 500,
      alt: '프로젝트 1',
    },
    {
      src: '/images/projects/19.png',
      width: 500,
      height: 500,
      alt: '프로젝트 2',
    },
    {
      src: '/images/projects/20.png',
      width: 500,
      height: 500,
      alt: '프로젝트 2',
    },
    {
      src: '/images/projects/21.png',
      width: 500,
      height: 500,
      alt: '프로젝트 2',
    },
    {
      src: '/images/projects/22.png',
      width: 500,
      height: 500,
      alt: '프로젝트 2',
    },
    {
      src: '/images/projects/23.png',
      width: 500,
      height: 500,
      alt: '프로젝트 2',
    },
    {
      src: '/images/projects/24.png',
      width: 500,
      height: 500,
      alt: '프로젝트 2',
    },
  ];

  return (
    <div className='text-white'>
      <h4>TravelApp App</h4>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
          />
        ))}
      </div>
      <p>
        여행일정을 생성 및 공유하고 타인의 공유된 여행일정을 복사 할 수 있는 웹
        애플리케이션
      </p>
    </div>
  );
};

export default TravelApp;
