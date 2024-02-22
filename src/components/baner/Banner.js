import Image from "next/image";

const Banner = () => {
  return (
    <main className=''>
      <div className=''>
        <Image
          src='/images/banner.jpg'
          alt='house image'
          width={1000}
          height={1000}
          className='w-[100vw]'
        />
        <div className='p-[5px] grid'>
          <p className='text-[31px] text-[#ffba00] font-bold'>
            Будинки з дикого зрубу</p>
          <p className='pb-[15px] text-[19px] text-[#132a13]'>
            Екологічно чиста високогірна смерека Закарпаття. Ручна робота від виробника без посередників!
          </p>
          <button
            className='justify-self-end px-[20px] py-[9px] border border-[#ffba00] bg-[#ffba00] rounded-[8px] text-[#ffffff] tracking-wide font-bold text-[17px] hover:bg-[#bb8a52] hover:border-[#bb8a52]'>
            Розрахувати
          </button>
        </div>
        {/*<div*/}
        {/*  className='absolute sm:top-[130px] sm:left-[100px] lg:top-[160px] lg:left-[170px] w-[380px] lg:w-[400px] xl:w-[480px]'>*/}
        {/*  <p*/}
        {/*    className='pb-[10px] xl:pb-[17px] text-[27px] lg:text-[33px] xl:text-[40px] text-[#ffba00] font-bold'>Будинки*/}
        {/*    з дикого зрубу</p>*/}
        {/*  <p className='pb-[25px] xl:pb-[35px] text-[15px] lg:text-[20px] xl:text-[25px] text-[#ffffff]'>*/}
        {/*    Екологічно чиста високогірна смерека Закарпаття. Ручна робота від виробника без посередників!*/}
        {/*  </p>*/}
        {/*  <button*/}
        {/*    className='px-[15px] py-[6px] lg:px-[24px] lg:py-[8px] xl:px-[35px] xl:py-[11px] border border-[#ffba00] bg-[#ffba00] rounded-[8px] text-[#ffffff] tracking-wide font-bold text-[12px] lg:text-[15px] xl:text-[18px] hover:bg-[#bb8a52] hover:border-[#bb8a52]'>*/}
        {/*    Розрахувати*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>

    </main>
  );
};

export default Banner;
