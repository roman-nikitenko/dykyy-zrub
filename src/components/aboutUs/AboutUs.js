import Image from "next/image";

const AboutUs = () => {
  return (
    <section className='p-[5px] xl:px-[150px] flex justify-center gap-[20px] lg:gap-[40px]'>
      <div className='hidden sm:grid lg:grid-rows-2 lg:grid-flow-col sm:items-center md:gap-[10px] lg:gap-[16px]'>
        <Image
          src='/images/house2.jpeg'
          alt='house image'
          width={255}
          height={237}
          className='md:hidden lg:block lg:row-span-2 lg:lace-content-center rounded-[35px]'
        />
        <Image
          src='/images/house1.jpeg'
          alt='house image'
          width={300}
          height={200}
          className='rounded-[35px]'
        />
        <Image
          src='/images/interior1.jpeg'
          alt='interior image'
          width={300}
          height={214}
          className=' rounded-[35px]'
        />
      </div>
      <article className='md:max-w-[400px] lg:max-w-[450px] xl:max-w-[570px]'>
        <hr className='w-[140px] border-t-[5px] xl:border-t-[6px] border-Green-700' />
        <h2 className='mb-[10px] font-bold text-[30px] lg:text-[35px] xl:text-[42px] text-Green-700'>Про нас</h2>
        <p className='mb-[10px] text-[17px] text-Green-700'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <p className='text-[17px] text-Green-700'>
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of
          Lorem Ipsum.
        </p>
      </article>
    </section>
  );
};

export default AboutUs;
