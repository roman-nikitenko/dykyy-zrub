import React from 'react';
import Image from 'next/image';
import Navigation from '@/components/navigation/Navigation';

export const Header = () => {
  return (
    <header className='flex items-center justify-between bg-Green-700 px-40'>
      <Navigation />
      <div className='flex items-center gap-3'>
        <Image src='icons/viber.svg' alt='Viber icon' width={28} height={28} />
        <p className='navigation_hover text-white'>+38 (097) 340 84 34</p>
      </div>
    </header>
  );
};
