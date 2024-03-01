import MainGallery from '@/components/gallery/MainGallery';
import { galleryImages } from '@/data/galleryImages';

const Gallery = () => {
  return (
    <div className='container-spaces pb-40'>
      <h1 className='decorationLine my-16'>Галерея</h1>
      <MainGallery arrayImages={galleryImages} />
    </div>
  );
};

export default Gallery;
