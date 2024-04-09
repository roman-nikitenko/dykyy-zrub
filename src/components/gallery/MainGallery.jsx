'use client';
import { useState } from 'react';
import GalleryModal from '@/components/galleryModal/GalleryModal';
import { galleryImages } from '@/data/galleryImages';
import Image from 'next/image';

const MainGallery = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [activeImage, setActiveImage] = useState('');

  const handleSelectClick = (image) => {
    setIsModalShown(true);
    setActiveImage(image);
  };

  const handleCloseModal = () => {
    setIsModalShown(false);
  };

  const handleChangeSlide = (type = 'next') => {
    const currentSlideIndex = galleryImages.findIndex((img) => img.src === activeImage);
    if (type === 'next') {
      if (currentSlideIndex !== galleryImages.length - 1) {
        const imageSrc = galleryImages[currentSlideIndex + 1].src;
        setActiveImage(imageSrc);
      } else {
        setActiveImage(galleryImages[0].src);
      }
    }

    if (type === 'prev') {
      if (currentSlideIndex <= 0) {
        setActiveImage(galleryImages[galleryImages.length - 1].src);
      } else {
        const imageSrc = galleryImages[currentSlideIndex - 1].src;
        setActiveImage(imageSrc);
      }
    }
  };

  return (
    <>
      <div className='columns-1 gap-x-2 md:columns-2 lg:columns-3'>
        {galleryImages.map((photo, index) => (
          <div
            key={photo.src + index}
            onClick={() => handleSelectClick(photo.src)}
            className='relative mb-2'
          >
            <Image
              src={photo.src}
              alt={`Gallery image ${photo.src}`}
              className='m-auto max-w-full cursor-pointer rounded-md'
              width={500}
              height={300}
            />
          </div>
        ))}
      </div>
      <GalleryModal
        navigationArrowsShown
        isModalShown={isModalShown}
        activeImage={activeImage}
        imagesSrc={galleryImages}
        setActiveImage={setActiveImage}
        handleClose={handleCloseModal}
        handleChangeSlide={handleChangeSlide}
      />
    </>
  );
};

export default MainGallery;
