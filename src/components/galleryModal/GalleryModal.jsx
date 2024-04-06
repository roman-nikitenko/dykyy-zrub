import React, { useRef, useState } from 'react';
import Image from 'next/image';
import GalleryModalButton from '@/components/galleryModal/GalleryModalButton';

const INITIAL_SCROLL_POSITION = 0;
const STEP_WIDTH = 200;
const STEP_WIDTH_SMALL = 45;

const GalleryModal = ({
  navigationInCenter,
  navigationArrowsShown,
  isModalShown,
  activeImageIndex,
  imagesSrc,
  setActiveImageIndex,
  setIsModalShown,
}) => {
  const [scrollPosition, setScrollPosition] = useState(INITIAL_SCROLL_POSITION);
  const containerRef = useRef();
  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    containerRef.current.scrollLeft = newScrollPosition;
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) =>
      prev !== INITIAL_SCROLL_POSITION ? prev - 1 : INITIAL_SCROLL_POSITION
    );
    handleScroll(-STEP_WIDTH_SMALL);
  };

  const handleNextImage = () => {
    const lastImageIndex = imagesSrc.length - 1;
    setActiveImageIndex((prev) => (prev !== lastImageIndex ? prev + 1 : INITIAL_SCROLL_POSITION));
    if (activeImageIndex !== lastImageIndex) {
      handleScroll(STEP_WIDTH_SMALL);
    } else {
      setScrollPosition(INITIAL_SCROLL_POSITION);
      containerRef.current.scrollLeft = INITIAL_SCROLL_POSITION;
    }
  };

  const handleCloseModal = () => {
    setIsModalShown(false);
    setScrollPosition(INITIAL_SCROLL_POSITION);
  };

  if (!isModalShown) {
    return null;
  }

  return (
    <>
      <div className='fixed inset-0 z-50 flex h-screen w-screen items-center justify-center overflow-x-auto overflow-y-auto bg-black/15 bg-opacity-60 outline-none backdrop-blur-sm'>
        <div className='relative mx-auto flex w-auto max-w-3xl flex-col items-center gap-[7px] p-[3px]'>
          <div className=' flex items-center justify-center'>
            <GalleryModalButton
              iconSrc='/icons/left-arrow.svg'
              handleClick={handlePrevImage}
              className='absolute left-0 '
            />
            <Image
              src={imagesSrc[activeImageIndex]?.imageLink}
              alt='house image'
              width={1000}
              height={1000}
              className='h-auto w-full rounded-md object-cover object-center xl:min-w-[750px]'
            />
            <GalleryModalButton
              iconSrc='/icons/right-arrow.svg'
              handleClick={handleNextImage}
              className='absolute right-0'
            />
            <GalleryModalButton
              iconSrc='/icons/close-mark.svg'
              handleClick={handleCloseModal}
              className='absolute right-[3px] top-[3px]'
            />
          </div>
          <div className='fixed bottom-[15px] flex items-center justify-self-center lg:max-w-[750px]'>
            <GalleryModalButton
              iconSrc='/icons/left-arrow.svg'
              handleClick={() => handleScroll(-STEP_WIDTH)}
              className={`hidden ${navigationArrowsShown && 'lg:absolute lg:left-[-50px] lg:flex'}`}
            />
            <div
              ref={containerRef}
              className={` flex gap-[5px] overflow-x-auto scroll-smooth ${navigationInCenter && 'justify-self-center'}`}
            >
              {imagesSrc.map(({ imageLink }, index) => (
                <Image
                  key={index}
                  src={imageLink}
                  alt='house image'
                  width={85}
                  height={85}
                  onClick={() => setActiveImageIndex(index)}
                  className={`h-[75px] w-[75px] cursor-pointer rounded-md object-cover transition duration-700 ${activeImageIndex === index && 'border-[2px] border-Green-300'}`}
                />
              ))}
            </div>
            <GalleryModalButton
              iconSrc='/icons/right-arrow.svg'
              handleClick={() => handleScroll(STEP_WIDTH)}
              className={`hidden ${navigationArrowsShown && 'lg:absolute lg:right-[-50px] lg:flex'}`}
            />
          </div>
        </div>
      </div>
      <div className='fixed inset-0 z-40 h-full w-full bg-black opacity-25'></div>
    </>
  );
};

export default GalleryModal;
