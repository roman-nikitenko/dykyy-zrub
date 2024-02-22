import Image from "next/image";

const AboutUs = () => {
  return (
    <article className='flex'>
      <div className='grid grid-rows-2 grid-flow-col gap-4'>
        <div className='row-span-2 justify-center'>
          <Image
            src='/images/house2.jpeg'
            alt='house image'
            width={255}
            height={237}
            // className='row-span-2 place-content-center rounded-[30px]'
          />
        </div>
      <Image
        src='/images/house1.jpeg'
        alt='house image'
        width={300}
        height={200}
        className='rounded-[30px]'
      />
      <Image
      src='/images/interior1.jpeg'
      alt='interior image'
      width={300}
      height={214}
      className=' rounded-[30px]'
      />
      </div>
      <section>
        <h1 className=''>Про нас</h1>
        <p></p>
      </section>
    </article>
  );
};

export default AboutUs;
