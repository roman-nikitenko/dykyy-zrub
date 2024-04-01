import Image from 'next/image';
import Navigation from '@/components/navigation/Navigation';
import Logo from '@/components/logo/Logo';
import BurgerMenu from '@/components/burgerMenu/BurgerMenu';
import { Modal } from '@/components/modal/Modal';

const Header = () => {
  return (
    <header className='relative flex items-center justify-center bg-Green-700'>
      <div className='container-spaces flex w-full max-w-[1440px] items-center justify-between'>
        <Logo />
        <div className='flex items-center overflow-hidden md:gap-7 lg:gap-5'>
          <Navigation />
        </div>
        <div className={'flex gap-4 py-2'}>
          <a
            href='tel:+38 (097) 340 84 34'
            className={'flex flex-initial justify-between gap-2 text-base'}
          >
            <span className='flex items-center gap-3'>
              <Image
                src='icons/viber.svg'
                className='block'
                alt='Viber icon'
                width={28}
                height={28}
              />
            </span>
          </a>
          <a
            href='tel:+38 (097) 340 84 34'
            className='navigation_hover hidden text-sm leading-4 text-white lg:block'
          >
            +38 (097) 340 84 34
          </a>

          <Modal />
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
