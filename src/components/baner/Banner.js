import Image from "next/image";

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
      {/*<article className='p-[5px] grid'>*/}
      {/*  <h1 className='text-[31px] text-Yellow-500 font-bold'>*/}
      {/*    Будинки з дикого зрубу</h1>*/}
      {/*  <p className='pb-[15px] text-[19px] text-Green-700'>*/}
      {/*    Екологічно чиста високогірна смерека Закарпаття. Ручна робота від виробника без посередників!*/}
      {/*  </p>*/}
      {/*  <button*/}
      {/*    className='justify-self-end px-[20px] py-[9px] border border-Yellow-500 bg-Yellow-500 rounded-[8px] text-white tracking-wide font-bold text-[17px] hover:bg-Brown-500 hover:border-Brown-500'>*/}
      {/*    Розрахувати*/}
      {/*  </button>*/}
      {/*</article>*/}
      <article
        className='absolute top-[20px] left-[20px] sm:top-[30px] sm:left-[100px] lg:top-[60px] lg:left-[170px] w-[380px] lg:w-[400px] xl:w-[480px]'>
        <h1
          className='pb-[10px] xl:pb-[17px] text-[27px] lg:text-[33px] xl:text-[40px] text-Yellow-500 font-bold'>
          Будинки з дикого зрубу
        </h1>
        <p className='pb-[25px] xl:pb-[35px] text-[15px] lg:text-[20px] xl:text-[25px] text-white'>
          Екологічно чиста високогірна смерека Закарпаття. Ручна робота від виробника без посередників!
        </p>
        <button
          className='px-[15px] py-[6px] lg:px-[24px] lg:py-[8px] xl:px-[35px] xl:py-[11px] border border-Yellow-500 bg-Yellow-500 rounded-[8px] text-white tracking-wide font-bold text-[12px] lg:text-[15px] xl:text-[18px] hover:bg-Brown-500 hover:border-Brown-500'>
          Розрахувати
        </button>
      </article>
    </section>
  );
};

export default Banner;
