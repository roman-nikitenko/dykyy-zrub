import Image from 'next/image';

const Banner = () => {
  return (
    <section className='relative w-full'>
      <Image src='/images/banner.jpg' alt='banner' height={1000} width={1000} className='w-full' />

      <article className='absolute left-0 top-0 flex flex-col gap-2 p-2 md:left-10 md:top-10 lg:left-20 lg:top-20 xl:left-32 xl:top-32'>
        <h1 className='text-xl text-Yellow-500 md:text-2xl xl:text-4xl'>Будинки з дикого зрубу</h1>
        <p className='text-white md:w-[450px] md:text-lg  xl:w-[490px] xl:text-xl'>
          Екологічно чиста високогірна смерека Закарпаття. Ручна робота від виробника без
          посередників!
        </p>
      </article>
    </section>
  );
};

export default Banner;
