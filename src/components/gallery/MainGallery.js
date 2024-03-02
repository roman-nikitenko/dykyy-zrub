'use client';
import Image from 'next/image';
import { useState } from 'react';
import GalleryModal from '@/components/galleryModal/GalleryModal';
import { galleryImages } from '@/data/galleryImages';

const MainGallery = ({ arrayImages }) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [activeImage, setActiveImage] = useState('');

  const handleImageClick = (image) => {
    setIsModalShown(true);
    setActiveImage(image);
  };

  return (
    <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
      {arrayImages.map((image) => (
        <div className='relative h-[300px] rounded-lg' key={image}>
          <Image
            src={image.imageLink}
            className='rounded-lg'
            alt='gallery-image'
            fill
            objectFit='cover'
            onClick={() => handleImageClick(image.imageLink)}
          />
        </div>
      ))}
      <GalleryModal
        isModalShown={isModalShown}
        activeImage={activeImage}
        imagesSrc={galleryImages}
        setActiveImage={setActiveImage}
        setIsModalShown={setIsModalShown}
      />
    </div>
  );
};

export default MainGallery;
