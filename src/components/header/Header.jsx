import Image from 'next/image';
import Navigation from '@/components/navigation/Navigation';
import Logo from '@/components/logo/Logo';
import BurgerMenu from '@/components/burgerMenu/BurgerMenu';

const Header = () => {
  return (
    <header className='relative flex items-center justify-center bg-Green-700'>
      <div className='container-spaces flex w-full max-w-[1440px] items-center justify-between'>
        <div className='flex items-center overflow-hidden md:gap-7 lg:gap-5'>
          <Logo />
          <Navigation />
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
          <a
            href='tel:+38 (097) 340 84 34'
            className='navigation_hover text-base text-white lg:text-lg'
          >
            +38 (097) 340 84 34
          </a>
        </div>
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
