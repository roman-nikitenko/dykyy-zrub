'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { NAV_LINKS } from '@/constants/constants';

const Navigation = () => {
  const pathname = usePathname();

  const linkClassNames = (href) =>
    classNames('navigation_hover text-base text-nowrap', {
      isActive: pathname === href,
    });

  return (
    <nav className={'hidden md:block'}>
      <ul className={'flex items-center gap-8 text-white lg:gap-12'}>
        {NAV_LINKS.map((link) => {
          return (
            <li className={'text-center'} key={link.id}>
              <Link href={link.href} className={linkClassNames(link.href)}>
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
