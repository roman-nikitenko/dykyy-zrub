'use client';
import { useState } from 'react';
import GalleryModal from '@/components/galleryModal/GalleryModal';
import { galleryImages } from '@/data/galleryImages';

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
            className='mb-2 w-full cursor-pointer transition duration-[500] ease-in hover:scale-[1.02]'
          >
            <img
              src={photo.imageLink}
              alt={`Gallary emage ${photo.imageLink}`}
              className='max-w-full rounded-md'
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
