'use client';
import Image from 'next/image';
import { useState } from 'react';
import GalleryModal from '@/components/galleryModal/GalleryModal';
import { galleryImages } from '@/data/galleryImages';

const MainGallery = ({ arrayImages }) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setIsModalShown(true);
    setActiveImageIndex(index);
  };

  return (
    <div className='grid cursor-pointer grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
      {arrayImages.map((image, index) => (
        <div className='relative h-[300px] rounded-lg' key={index}>
          <Image
            src={image.imageLink}
            className='rounded-lg object-cover transition duration-300 hover:scale-[1.03]'
            alt='gallery-image'
            fill
            sizes='100%'
            onClick={() => handleImageClick(index)}
          />
        </div>
      ))}
      <GalleryModal
        navigationArrowsShown
        isModalShown={isModalShown}
        activeImageIndex={activeImageIndex}
        imagesSrc={galleryImages}
        setActiveImageIndex={setActiveImageIndex}
        setIsModalShown={setIsModalShown}
      />
    </div>
  );
};

export default MainGallery;
