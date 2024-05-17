import Image from 'next/image';
import React from 'react';

const WeatherApp = () => {
  const images = [
    {
      src: '/images/projects/14.png',
      width: 500,
      height: 500,
      alt: '프로젝트 1',
    },
  ];

  return (
    <div className='text-white'>
      <h4>Weather App</h4>
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
      <p>한눈에 날짜 별 날씨를 알 수 있는 애플리케이션.</p>
    </div>
  );
};

export default WeatherApp;
