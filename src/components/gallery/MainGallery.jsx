'use client';
import { useState } from 'react';
import GalleryModal from '@/components/galleryModal/GalleryModal';
import { galleryImages } from '@/data/galleryImages';
import Image from 'next/image';

const MainGallery = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [activeImage, setActiveImage] = useState('');

  const handleImageClick = (image) => {
    setIsModalShown(true);
    setActiveImage(image);
  };

  return (
    <>
      <div className='columns-1 gap-x-2 md:columns-2 lg:columns-3 '>
        {galleryImages.map((photo, index) => (
          <div
            key={photo.imageLink + index}
            onClick={() => handleImageClick(photo.imageLink)}
            className='relative mb-2 w-full cursor-pointer transition duration-[500] ease-in hover:scale-[1.02]'
          >
            <Image
              src={photo.imageLink}
              alt={`Gallery image ${photo.imageLink}`}
              className='max-w-full rounded-md'
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
        setIsModalShown={setIsModalShown}
      />
    </>
  );
};

export default MainGallery;
