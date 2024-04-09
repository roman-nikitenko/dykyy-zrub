import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

const GalleryModalButton = ({ iconSrc, className, handleClick }) => {
  const buttonClassNames = classNames(
    'flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full outline-none transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
    { [className]: Boolean(className) }
  );
  return (
    <button className={buttonClassNames} onClick={handleClick} type='button'>
      <Image src={iconSrc} alt='icon' fill style={{ fill: 'red' }} />
    </button>
  );
};

export default GalleryModalButton;
