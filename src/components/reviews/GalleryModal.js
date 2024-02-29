import React from 'react';
import { Carousel } from '@material-tailwind/react';
import Image from 'next/image';
import Modal from '@/components/modal/Modal';
import ImageNavigation from '@/components/reviews/ImageNavigation';

const GalleryModal = ({ isModalShown, activeImageIndex, imagesSrc, setIsModalShown }) => {
  return (
    <Modal isModalShown={isModalShown} setIsModalShown={setIsModalShown}>
      <Carousel
        className='rounded-xl'
        navigation={({ setActiveIndex, activeIndex }) => (
          <ImageNavigation
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
            activeImage={activeImageIndex}
            imagesSrc={imagesSrc}
          />
        )}
      >
        {imagesSrc.map((imageSrc) => (
          <Image key={imageSrc} src={imageSrc} alt='house image' fill objectFit='cover' />
        ))}
      </Carousel>
    </Modal>
  );
};

export default GalleryModal;
