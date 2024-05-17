import Image from 'next/image';
import React from 'react';

const ChattingApp = () => {
  const images = [
    {
      src: '/images/projects/7.png',
      width: 500,
      height: 500,
      alt: '프로젝트 1',
    },
    {
      src: '/images/projects/8.png',
      width: 500,
      height: 500,
      alt: '프로젝트 2',
    },
    {
      src: '/images/projects/9.png',
      width: 500,
      height: 500,
      alt: '프로젝트 2',
    },
    {
      src: '/images/projects/4.png',
      width: 500,
      height: 500,
      alt: '프로젝트 2',
    },
    {
      src: '/images/projects/5.png',
      width: 500,
      height: 500,
      alt: '프로젝트 2',
    },
    {
      src: '/images/projects/6.png',
      width: 500,
      height: 500,
      alt: '프로젝트 2',
    },
  ];

  return (
    <div className='text-white'>
      <h4>Chatting App</h4>
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
      <p>로그인 및 회원가입 기능이 포함된 간단한 채팅 애플리케이션</p>
    </div>
  );
};

export default ChattingApp;
