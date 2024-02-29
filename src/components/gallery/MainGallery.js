import Image from 'next/image';

const MainGallery = ({ arrayImages }) => {
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
          />
        </div>
      ))}
    </div>
  );
};

export default MainGallery;
