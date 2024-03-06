import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

const GalleryModalButton = ({ iconSrc, className, handleClick }) => {
  return (
    <button
      className={classNames(
        'flex h-[48px] w-[48px] items-center justify-center rounded-full outline-none transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
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
