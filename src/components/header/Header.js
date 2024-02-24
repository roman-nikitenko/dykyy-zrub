import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className='flex flex-col bg-Green-700'>
      <div className='flex items-center justify-between bg-Green-600 px-[160px] py-1'>
        <div className='flex gap-10 '>
          <p className='flex cursor-pointer items-center gap-2 py-1 text-white'>
            <Image
              src='images/phon.svg'
              width={24}
              height={24}
              alt='phone icon'
            />
            +38 (097) 340 84 34
          </p>
          <p className='flex cursor-pointer items-center gap-2 text-white'>
            <Image
              src='images/email.svg'
              width={24}
              height={24}
              alt='email icon'
            />
            dykyy-zrub@ukr.net
          </p>
        </div>
        <div className='flex gap-7'>
          <div className='flex size-7 items-center justify-center rounded-full bg-amber-200'>
            <Image
              src='icons/facebook.svg'
              width={20}
              height={20}
              alt='phone icon'
            />
          </div>
          <div className='flex size-7 items-center justify-center rounded-full bg-amber-200'>
            <Image
              src='icons/instagram.svg'
              width={20}
              height={20}
              alt='phone icon'
            />
          </div>
          <div className='flex size-7 items-center justify-center rounded-full bg-amber-200'>
            <Image
              src='icons/telegram.svg'
              width={20}
              height={20}
              alt='phone icon'
            />
          </div>
          <div className='flex size-7 items-center justify-center rounded-full bg-amber-200'>
            <Image
              src='icons/viber.svg'
              width={20}
              height={20}
              alt='phone icon'
            />
          </div>
        </div>
      </div>
      <nav className='px-[160px]'>
        <ul className='flex w-[1280px] gap-[54px] text-white'>
          <li className='cursor-pointer py-4 transition hover:scale-[1.1] hover:text-Yellow-500'>
            <Link href={'/'}>Головна</Link>
          </li>
          <li className='cursor-pointer py-4 transition hover:scale-[1.1] hover:text-Yellow-500'>
            <Link href={'/works'}>Наші роботи</Link>
          </li>
          <li className='cursor-pointer py-4 transition hover:scale-[1.1] hover:text-Yellow-500'>
            <Link href={'/prices'}>Ціни</Link>
          </li>
          <li className='cursor-pointer py-4 transition hover:scale-[1.1] hover:text-Yellow-500'>
            <Link href={'/contacts'}>Контакти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
