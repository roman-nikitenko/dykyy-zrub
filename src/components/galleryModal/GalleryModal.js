import React, { useRef, useState } from 'react';
import Image from 'next/image';
import GalleryModalButton from '@/components/gallery/GalleryModalButton';

const STEP_WIDTH = 200;

const GalleryModal = ({
  navigationInCenter,
  navigationArrowsShown,
  isModalShown,
  activeImage,
  imagesSrc,
  setActiveImage,
  setIsModalShown,
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();
  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    containerRef.current.scrollLeft = newScrollPosition;
  };

  if (!isModalShown) {
    return null;
  }

  return (
    <>
      <div className='fixed inset-0 z-50 flex h-screen w-screen items-center justify-center overflow-y-auto bg-black/15 bg-opacity-60 px-[5px] py-[10px] outline-none backdrop-blur-sm'>
        <div className='relative mx-auto grid w-auto max-w-3xl place-content-center gap-[7px]'>
          <GalleryModalButton
            iconSrc='/icons/close-mark.svg'
            handleClick={() => setIsModalShown(false)}
            className='justify-self-end lg:absolute lg:right-[-50px]'
          />
          <div className='flex h-auto w-full justify-center'>
            <Image
              src={activeImage}
              alt='house image'
              width={1000}
              height={1000}
              className='h-[250px] w-auto rounded-md object-cover object-center sm:h-[350px] md:h-[450px] xl:h-[620px]'
            />
          </div>
          <div className='relative flex items-center justify-self-center'>
            <GalleryModalButton
              iconSrc='/icons/left-arrow.svg'
              handleClick={() => handleScroll(-STEP_WIDTH)}
              className={`hidden lg:absolute lg:left-[-50px] lg:flex ${navigationArrowsShown && 'flex'}`}
            />
            <div
              ref={containerRef}
              className={`flex gap-[5px] overflow-x-auto scroll-smooth ${navigationInCenter && 'justify-self-center'}`}
            >
              {imagesSrc.map(({ imageLink }, index) => (
                <Image
                  key={index}
                  src={imageLink}
                  alt='house image'
                  width={85}
                  height={85}
                  onClick={() => setActiveImage(imageLink)}
                  className={`h-[75px] w-[75px] cursor-pointer rounded-md object-cover transition duration-700 ${activeImage === imageLink && 'border-[2px] border-Green-300'}`}
                />
              ))}
            </div>
            <GalleryModalButton
              iconSrc='/icons/right-arrow.svg'
              handleClick={() => handleScroll(STEP_WIDTH)}
              className={`hidden lg:absolute lg:right-[-50px] lg:flex ${navigationArrowsShown && 'flex'}`}
            />
          </div>
        </div>
      </div>
      <div className='fixed inset-0 z-40 h-full w-full bg-black opacity-25'></div>
    </>
  );
};

export default GalleryModal;
