import React from 'react';
import Image from 'next/image';
import Navigation from '@/components/navigation/Navigation';
import Logo from '@/components/logo/Logo';

export const Header = () => {
  return (
    <header className='flex items-center justify-between bg-Green-700 px-5 lg:px-12 2xl:px-40'>
      <div className='flex items-center md:gap-7 lg:gap-10'>
        <Logo />
        <Navigation />
        <button className='hidden rounded-[8px] border border-Yellow-500 bg-Yellow-500 px-3 py-1 text-[12px] font-bold tracking-wide text-white transition hover:border-Brown-500 hover:bg-Brown-500 md:block lg:ml-10 lg:text-[15px] xl:text-[18px]'>
          <span className='hidden lg:block'>Задати питання</span>
          <div className='relative size-7 lg:hidden'>
            <Image src='/icons/message.svg' alt='ask question icon' fill />
          </div>
        </button>
      </div>
      <div className='flex items-center gap-3'>
        <Image src='icons/viber.svg' alt='Viber icon' width={28} height={28} />
        <p className='navigation_hover text-white'>+38 (097) 340 84 34</p>
      </div>
      <div className='relative size-7 md:hidden'>
        <Image src='/icons/burger-white.svg' fill alt='Burger icon' />
      </div>
    </header>
  );
};
