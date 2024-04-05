'use client';
import { useState } from 'react';
import GalleryModal from '@/components/galleryModal/GalleryModal';
import { galleryImages } from '@/data/galleryImages';
import PhotoAlbum from 'react-photo-gallery';
import NextJsImage from '@/components/gallery/NextJsImage';
import photos from '@/components/gallery/photos';

const MainGallery = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [activeImage, setActiveImage] = useState('');

  const handleImageClick = (image) => {
    setIsModalShown(true);
    setActiveImage(image);
  };

  return (
    <>
      <PhotoAlbum
        layout='rows'
        photos={photos}
        renderPhoto={NextJsImage}
        defaultContainerWidth={1200}
        sizes={{ size: '100vw' }}
        onClick={(_, photos) => {
          handleImageClick(photos.photo);
        }}
      />

      <GalleryModal
        navigationArrowsShown
        isModalShown={isModalShown}
        activeImage={activeImage}
        imagesSrc={galleryImages}
        setActiveImage={setActiveImage}
        setIsModalShown={setIsModalShown}
      />
    </>

    // <div className='flex flex-wrap cursor-pointer grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
    //
    //   {/*{arrayImages.map((image, index) => (*/}
    //   {/*  <div className='relative w-[200px] h-[200px] border  rounded-lg' key={index}>*/}
    //   {/*    <Image*/}
    //   {/*      src={image.imageLink}*/}
    //   {/*      className='rounded-lg object-cover transition duration-300 hover:scale-[1.03]'*/}
    //   {/*      alt='gallery-image'*/}
    //   {/*      fill*/}
    //   {/*      onClick={() => handleImageClick(image.imageLink)}*/}
    //   {/*    />*/}
    //   {/*  </div>*/}
    //   {/*))}*/}
    //
    // </div>
  );
};

export default MainGallery;
