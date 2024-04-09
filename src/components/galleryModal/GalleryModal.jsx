import React, { useRef, useState } from 'react';
import Image from 'next/image';
import GalleryModalButton from '@/components/gallery/GalleryModalButton';
import useNoScroll from '@/hooks/useNoScroll';
import classNames from 'classnames';

const STEP_WIDTH = 200;

const GalleryModal = ({
  navigationInCenter,
  navigationArrowsShown,
  isModalShown,
  activeImage,
  imagesSrc,
  setActiveImage,
  handleClose,
  handleChangeSlide,
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();

  useNoScroll(isModalShown);

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    containerRef.current.scrollLeft = newScrollPosition;
  };

  if (!isModalShown) {
    return null;
  }

  const closeButtonClassNames = classNames(
    'absolute top-0 right-2 sm:-top-12 sm:right-12 w-12 h-12 hover:border-gray-600'
  );

  const handlePrevImage = () => {
    handleChangeSlide('prev');
  };
  const handleNextImage = () => {
    handleChangeSlide('next');
  };

  return (
    <>
      <div className='fixed inset-0 flex h-screen w-screen items-center justify-center overflow-x-auto overflow-y-auto bg-black/15 bg-opacity-60 px-[5px] py-[10px] outline-none backdrop-blur-sm'>
        <div className='relative mx-auto flex h-full w-full flex-col place-content-center gap-[7px] overflow-hidden px-0 md:px-8'>
          <div className='relative flex h-full max-h-[80vh] w-full grow justify-center'>
            <Image
              src={activeImage}
              alt='house image'
              className='w-auto rounded-md object-contain'
              fill
            />
            <GalleryModalButton
              iconSrc='/icons/close-mark.svg'
              handleClick={handleClose}
              className={closeButtonClassNames}
            />
            <GalleryModalButton
              iconSrc='/icons/left-arrow.svg'
              handleClick={handlePrevImage}
              className={`absolute left-0 top-1/2 h-12 w-12 bg-gray-400 bg-opacity-50 md:h-16 md:w-16`}
            />
            <GalleryModalButton
              iconSrc='/icons/right-arrow.svg'
              handleClick={handleNextImage}
              className={`absolute right-0 top-1/2 h-12 w-12 bg-gray-400 bg-opacity-50 md:h-16 md:w-16`}
            />
          </div>
          <div className='relative flex items-center self-center justify-self-center sm:max-w-[80vw]'>
            <GalleryModalButton
              iconSrc='/icons/left-arrow.svg'
              handleClick={() => handleScroll(-STEP_WIDTH)}
              className={`hidden ${navigationArrowsShown && 'sm:absolute sm:left-[-50px] sm:flex'}`}
            />
            <div
              ref={containerRef}
              className={`flex scroll-m-1 gap-[5px] overflow-x-scroll scroll-smooth ${navigationInCenter && 'justify-self-center'}`}
            >
              {imagesSrc.map(({ src }, index) => (
                <Image
                  key={index}
                  src={src}
                  alt='house image'
                  width={85}
                  height={85}
                  onClick={() => setActiveImage(src)}
                  className={`h-[75px] w-[75px] cursor-pointer rounded-md object-cover transition duration-700 ${activeImage === src && 'border-[2px] border-Green-300'}`}
                />
              ))}
            </div>
            <GalleryModalButton
              iconSrc='/icons/right-arrow.svg'
              handleClick={() => handleScroll(STEP_WIDTH)}
              className={`hidden ${navigationArrowsShown && 'sm:absolute sm:right-[-50px] sm:flex'}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryModal;
