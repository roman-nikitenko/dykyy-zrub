import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/' className={'no-wrap flex items-center'}>
      <div className='relative size-10 cursor-pointer'>
        <Image src='/images/logo2.png' fill sizes='100%' alt='logo' />
      </div>
      <span
        className={
          'text-nowrap pl-3 text-base font-bold text-white lg:hidden lg:text-2xl desktop:block'
        }
      >
        Дикий зруб
      </span>
    </Link>
  );
};

export default Logo;
