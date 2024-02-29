import Image from 'next/image';
import { useEffect } from 'react';

const ImageNavigation = ({ setActiveIndex, activeIndex, activeImage, imagesSrc }) => {
  useEffect(() => {
    setActiveIndex(activeImage);
  }, []);

  return (
    <div className='absolute bottom-0 left-1/2 z-50 w-full -translate-x-2/4 gap-2'>
      <div className='flex justify-center gap-[10px]'>
        {imagesSrc.map((iconSrc, index) => (
          <div key={index} className='flex place-content-center gap-[5px]'>
            <Image
              src={iconSrc}
              alt='house image'
              width={95}
              height={95}
              className={`h-auto w-auto cursor-pointer object-cover ${activeIndex === index && 'border-[2px] border-Green-300'}`}
              onClick={() => setActiveIndex(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageNavigation;
