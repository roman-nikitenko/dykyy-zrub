import React from 'react';
import { Dialog, IconButton } from '@material-tailwind/react';
import Image from 'next/image';

const GalleryModal = ({
  navigationInCenter,
  isModalShown,
  activeImage,
  imagesSrc,
  setActiveImage,
  setIsModalShown,
}) => {
  return (
    <Dialog
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      open={isModalShown}
      handler={() => setIsModalShown((prev) => !prev)}
      className=' grid gap-[7px] bg-transparent shadow-none'
    >
      <IconButton
        variant='text'
        color='white'
        size='md'
        onClick={() => setIsModalShown(false)}
        className='justify-self-end rounded-full'
      >
        <Image src='/icons/close-mark.svg' alt='icon' width={75} height={75} />
      </IconButton>
      <div className='m-auto grid place-content-center gap-[7px]'>
        <div className='flex h-auto w-full justify-center'>
          <Image
            src={activeImage}
            alt='house image'
            sizes='100%'
            width={1000}
            height={1000}
            objectFit='contain'
            className='xxl:h-[700px] h-[250px] w-auto rounded-md object-cover object-center sm:h-[350px] md:h-[450px] xl:h-[520px]'
          />
        </div>
        <div
          className={`flex gap-[5px] overflow-x-auto ${navigationInCenter && 'justify-self-center'}`}
        >
          {imagesSrc.map(({ imageLink }, index) => (
            <Image
              key={index}
              src={imageLink}
              alt='house image'
              width={75}
              height={75}
              onClick={() => setActiveImage(imageLink)}
              className={`h-[80px] w-[80px] cursor-pointer rounded-md object-cover ${activeImage === imageLink && 'border-[2px] border-Green-300'}`}
            />
          ))}
        </div>
      </div>
    </Dialog>
  );
};

export default GalleryModal;
