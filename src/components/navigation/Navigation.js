'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const Navigation = ({ hidden, setIsOpen }) => {
  const pathName = usePathname();
  const navLinks = [
    { id: 1, name: 'Головна', href: '/' },
    { id: 2, name: 'Наші роботи', href: '/works' },
    { id: 3, name: 'Ціни', href: '/prices' },
    { id: 4, name: 'Контакти', href: '/contacts' },
  ];

  return (
    <nav className={`${hidden && 'hidden'} md:block`}>
      <ul className='flex flex-col items-center text-white sm:flex-row md:gap-10 lg:gap-12'>
        {navLinks.map((link) => {
          const isActive = pathName === link.href;
          return (
            <li
              className={classNames('navigation_hover text-base lg:text-lg', {
                isActive: isActive,
              })}
              key={link.id}
            >
              <Link onClick={() => setIsOpen(false)} href={link.href}>
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
