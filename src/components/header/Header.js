'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/navigation/Navigation';
import Logo from '@/components/logo/Logo';
import useNoScroll from '@/utils/hooks/useNoScroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenuHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  useNoScroll(isOpen);

  return (
    <header className='relative flex items-center justify-center bg-Green-700'>
      <div className='container-spaces flex w-full max-w-[1440px] items-center justify-between'>
        <div className='flex items-center overflow-hidden md:gap-7 lg:gap-5'>
          <Logo />
          <Navigation hidden={true} />
          <button className='hidden rounded-[8px] border border-Yellow-500 bg-Yellow-500 px-3 py-1 text-[12px] font-bold tracking-wide text-white transition hover:border-Brown-500 hover:bg-Brown-500 md:block lg:text-[15px] xl:ml-10 xl:text-[18px]'>
            <span className='hidden xl:block'>Задати питання</span>
            <div className='relative size-7 xl:hidden'>
              <Image src='/icons/message.svg' alt='ask question icon' fill />
            </div>
          </button>
        </div>
        <div className='flex items-center gap-3'>
          <Image
            src='icons/viber.svg'
            className='hidden lg:block'
            alt='Viber icon'
            width={28}
            height={28}
          />
          <p className='navigation_hover text-base text-white lg:text-lg'>+38 (097) 340 84 34</p>
        </div>

        <div
          className='relative flex size-7 items-center justify-center lg:hidden'
          onClick={openMenuHandler}
        >
          {isOpen ? (
            <Image src='/icons/cancele2.svg' alt='cancel icon' width={20} height={20} />
          ) : (
            <Image src='/icons/burger-white.svg' fill alt='Burger icon' />
          )}
        </div>
        {isOpen && (
          <div className='absolute right-0 top-[56px] z-10 w-full overflow-hidden bg-white md:w-[200px] md:rounded-bl-lg'>
            <div
              id='menu'
              className={`h-screen bg-Green-700 px-5 py-10 transition-transform duration-500 ${isOpen ? 'translate-x-[0]' : 'translate-x-[100%]'} `}
            >
              <Navigation setIsOpen={setIsOpen} hidden={false} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
