'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const Navigation = () => {
  const pathName = usePathname();
  const navLinks = [
    { id: 1, name: 'Головна', href: '/' },
    { id: 2, name: 'Наші роботи', href: '/works' },
    { id: 3, name: 'Ціни', href: '/prices' },
    { id: 4, name: 'Контакти', href: '/contacts' },
  ];

  return (
    <nav>
      <ul className='flex gap-[54px] text-white'>
        {navLinks.map((link) => {
          const isActive = pathName === link.href;
          return (
            <li
              className={classNames('navigation_hover', {
                isActive: isActive,
              })}
              key={link.id}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
