import MainGallery from '@/components/gallery/MainGallery';
import { galleryImages } from '@/data/galleryImages';

const Gallery = () => {
  return (
    <section className='flex justify-center'>
      <div className='container-spaces max-width-1440 pb-40'>
        <h1 className='decorationLine my-16'>Галерея</h1>
        <MainGallery arrayImages={galleryImages} />
      </div>
    </section>
  );
};

export default Gallery;
