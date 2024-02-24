import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-Green-700 flex flex-col">
      <div className="bg-Green-600 flex justify-between items-center py-1 px-[160px]">
        <div className="flex gap-10 ">
          <p className="text-white cursor-pointer flex items-center gap-2 py-1">
            <Image src='images/phon.svg' width={24} height={24} alt="phone icon" />
            +38 (097) 340 84 34
          </p>
          <p className="text-white cursor-pointer flex items-center gap-2">
            <Image src='images/email.svg' width={24} height={24} alt="email icon" />
            dykyy-zrub@ukr.net
          </p>
        </div>
        <div className="flex gap-7">
          <div className="rounded-full bg-amber-200 size-7 flex items-center justify-center">
            <Image src='icons/facebook.svg' width={20} height={20} alt="phone icon" />
          </div>
          <div className="rounded-full bg-amber-200 size-7 flex items-center justify-center">
            <Image src='icons/instagram.svg' width={20} height={20} alt="phone icon" />
          </div>
          <div className="rounded-full bg-amber-200 size-7 flex items-center justify-center">
            <Image src='icons/telegram.svg' width={20} height={20} alt="phone icon" />
          </div>
          <div className="rounded-full bg-amber-200 size-7 flex items-center justify-center">
            <Image src='icons/viber.svg' width={20} height={20} alt="phone icon" />
          </div>
        </div>
      </div>
      <nav className="px-[160px]">
        <ul className="text-white flex gap-[54px] w-[1280px]">
          <Link href={'/'}><li className="py-4 cursor-pointer hover:scale-[1.1] transition hover:text-Yellow-500">Головна</li></Link>
          <Link href={'/works'}><li className="py-4 cursor-pointer hover:scale-[1.1] transition hover:text-Yellow-500">Наші роботи</li></Link>
          <Link href={'/prices'}><li className="py-4 cursor-pointer hover:scale-[1.1] transition hover:text-Yellow-500">Ціни</li></Link>
          <Link href={'/contacts'}><li className="py-4 cursor-pointer hover:scale-[1.1] transition hover:text-Yellow-500">Контакти</li></Link>
        </ul>
      </nav>
    </header>
  );
};
