import MainGallery from '@/components/gallery/MainGallery';

export const metadata = {
  title: 'Галерея',
};

const Gallery = () => {
  return (
    <section className='flex justify-center'>
      <div className='container-spaces max-width-1440 pb-[100px] lg:pb-[160px]'>
        <h1 className='decorationLine my-12 md:my-[64px]'>Галерея</h1>
        <MainGallery />
      </div>
    </section>
  );
};

export default Gallery;
