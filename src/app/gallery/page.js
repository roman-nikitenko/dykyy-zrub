import MainGallery from '@/components/gallery/MainGallery';
import { galleryImages } from '@/data/galleryImages';

const Gallery = () => {
  return (
    <div className='container-spaces pb-[100px] lg:pb-[160px]'>
      <h1 className='decorationLine mb-[50px] mt-[64px] md:my-[64px]'>Галерея</h1>
      <MainGallery arrayImages={galleryImages} />
    </div>
  );
};

export default Gallery;
