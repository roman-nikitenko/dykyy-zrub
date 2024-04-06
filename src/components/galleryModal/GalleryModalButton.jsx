import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

const GalleryModalButton = ({ iconSrc, className, handleClick }) => {
  return (
    <button
      className={classNames(
        'flex h-[35px] w-[35px] items-center justify-center rounded-full outline-none transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none sm:h-[44px] sm:w-[44px]',
        className && className
      )}
      onClick={handleClick}
      type='button'
    >
      <Image src={iconSrc} alt='icon' width={25} height={25} />
    </button>
  );
};

export default GalleryModalButton;
