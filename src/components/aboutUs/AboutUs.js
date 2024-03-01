import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className='mb-10 flex justify-center gap-[20px] p-[5px] lg:gap-[40px]'>
      <div className='flex items-center gap-10'>
        <div className='hidden sm:grid sm:items-center md:gap-[10px] lg:grid-flow-col lg:grid-rows-2 lg:gap-[16px]'>
          <div className='w-[255px] overflow-hidden rounded-3xl shadow-lg shadow-gray-400 md:hidden lg:row-span-2 lg:block lg:place-content-center'>
            <Image
              src='/images/house2.jpeg'
              alt='house image'
              width={255}
              height={237}
              className='transition duration-300 hover:scale-[1.1]'
            />
          </div>
          <div className='w-[300px] overflow-hidden rounded-3xl shadow-lg shadow-gray-400'>
            <Image
              src='/images/house1.jpeg'
              alt='house image'
              width={300}
              height={200}
              className='transition duration-300 hover:scale-[1.1]'
            />
          </div>
          <div className='w-[300px] overflow-hidden rounded-3xl shadow-lg shadow-gray-400'>
            <Image
              src='/images/interior1.jpeg'
              alt='interior image'
              width={300}
              height={214}
              className='transition duration-300 hover:scale-[1.1]'
            />
          </div>
        </div>
        <article className='md:max-w-[400px] lg:max-w-[450px] xl:max-w-[570px] '>
          <p className='mb-[10px] text-[17px] text-Green-700'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p className='text-[17px] text-Green-700'>
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutUs;
