import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <div className='relative size-10 cursor-pointer'>
        <Image src='/images/logo2.png' fill sizes='100%' alt='logo' />
      </div>
    </Link>
  );
};

export default Logo;
