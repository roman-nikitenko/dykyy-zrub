'use client';
import useNoScroll from '@/hooks/useNoScroll';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { useState } from 'react';
import Image from 'next/image';
import { NAV_LINKS } from '@/constants/constants';
import Link from 'next/link';

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useNoScroll(isMenuOpen);

  const toggleOpenMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  const pathName = usePathname();
  const linkClassNames = (href) =>
    classNames('navigation_hover text-base lg:text-lg', {
      isActive: pathName === href,
    });

  return (
    <>
      <div
        className='relative z-10 flex size-7 h-[30px] w-[30px] items-center justify-center md:hidden'
        onClick={toggleOpenMenu}
      >
        {isMenuOpen ? (
          <Image src='/icons/cancele2.svg' alt='Burger close' width={30} height={30} />
        ) : (
          <Image src='/icons/burger-white.svg' alt='Burger open' width={30} height={30} />
        )}
      </div>
      {isMenuOpen && (
        <div className='absolute right-0 top-[40px] z-10 w-full overflow-hidden bg-white md:w-[200px] md:rounded-bl-lg'>
          <div
            id='menu'
            className={`h-screen bg-Green-700 px-5 py-10 transition-transform duration-500 lg:hidden ${isMenuOpen ? 'translate-x-[0]' : 'translate-x-[100%]'} `}
          >
            <nav className={`block md:hidden`}>
              <ul
                className={`flex flex-col items-center text-white md:gap-10 lg:flex-row lg:gap-12`}
              >
                {NAV_LINKS.map((link) => {
                  return (
                    <li className={linkClassNames(link.href)} key={link.id}>
                      <Link href={link.href} onClick={toggleOpenMenu}>
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
