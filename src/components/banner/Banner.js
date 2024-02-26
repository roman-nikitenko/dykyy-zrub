import Image from 'next/image';

const Banner = () => {
  return (
    <section className='relative w-full'>
      <Image
        src='/images/banner.jpg'
        alt='banner'
        width={1000}
        height={1000}
        className='w-[100vw]'
      />
      <article className='absolute left-[5px] top-[20px] w-[380px] sm:left-[100px] sm:top-[30px] lg:left-[170px] lg:top-[60px] lg:w-[400px] xl:w-[480px]'>
        <h1 className='pb-[10px] text-[27px] font-bold text-Yellow-500 lg:text-[33px] xl:pb-[17px] xl:text-[40px]'>
          Будинки з дикого зрубу
        </h1>
        <p className='w-auto pb-[25px] text-[15px] text-white lg:text-[20px] xl:pb-[35px] xl:text-[25px]'>
          Екологічно чиста високогірна смерека Закарпаття. Ручна робота від виробника без
          посередників!
        </p>
      </article>
    </section>
  );
};

export default Banner;
