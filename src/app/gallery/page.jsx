import MainGallery from '@/components/gallery/MainGallery';
import { galleryImages } from '@/data/galleryImages';

export const metadata = {
  title: 'Галерея',
};

const Gallery = () => {
  return (
    <section className='flex justify-center'>
      <div className='container-spaces max-width-1440 pb-[100px] lg:pb-[160px]'>
        <h1 className='decorationLine mb-[50px] mt-[64px] md:my-[64px]'>Галерея</h1>
        <MainGallery arrayImages={galleryImages} />
      </div>
    </section>
  );
};

export default Gallery;
