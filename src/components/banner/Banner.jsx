import Image from 'next/image';
import BannerImage from '@/public/images/banner.jpg';

const Banner = () => {
  return (
    <section className='relative h-[710px] max-h-[95vh] w-full'>
      <Image
        src={BannerImage}
        placeholder={'blur'}
        alt='banner'
        fill
        className=' object-cover md:h-auto'
      />

      <article className='absolute left-0 top-1/3 flex -translate-y-1/3 flex-col gap-2 p-2 md:left-10 lg:left-20 xl:left-32'>
        <h1 className='text-2xl text-Yellow-500 xl:text-4xl'>Зруб закарпатський</h1>
        <p className='max-w-[450px] text-white md:text-lg  xl:w-[490px] xl:text-xl'>
          Екологічно чиста високогірна смерека Закарпаття. Ручна робота від виробника без
          посередників!{' '}
        </p>
      </article>
    </section>
  );
};

export default Banner;
