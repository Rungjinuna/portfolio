'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import GithubIcon from '../../../public/github-icon.svg';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  return (
    <section
      id='contact'
      className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'
    >
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
      <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>Final remark</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          {' '}
          저는 소프트웨어 개발의 무한한 가능성과 그 안에서 제가 이룰 수 있는
          성장을 믿습니다. 비록 많이 부족한 신입 개발자이지만, 빠르게 변화하는
          기술 환경 속에서 항상 학습하고, 발전하며, 도전할 준비가 되어 있습니다.
          항상 배우고 성장하는 자세로 임하며, 회사의 목표와 비전을 함께
          이루어나가는 개발자가 되고 싶습니다. 감사합니다.
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href='https://github.com/Rungjinuna'>
            <Image src={GithubIcon} alt='Github Icon' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
