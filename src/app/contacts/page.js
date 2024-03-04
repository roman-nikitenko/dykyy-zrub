import Image from 'next/image';

const HomePage = () => {
  return (
    <div className='container-spaces  pb-[100px] lg:pb-[160px]'>
      <h1 className='decorationLine mb-[50px] mt-[64px] md:my-[64px]'>Контакти</h1>
      <div className='mb-10 grid grid-cols-1 justify-center gap-5 md:grid-cols-3 lg:flex xl:justify-between'>
        <div className='block-contacts'>
          <Image src='/icons/market-map.svg' alt='map point icon' width={40} height={40} />
          <h3>Location</h3>
          <p className='text-center text-Green-400'>
            Україна с. Колочава Закарпатська обл. Межигірський р-н.
          </p>
        </div>
        <div className='block-contacts'>
          <Image src='/icons/envelope-mail.svg' alt='map point icon' width={40} height={40} />
          <h3>Email Address</h3>
          <p className='text-center text-Green-400'>dykyy-zrub@ukr.net</p>
        </div>

        <div className='block-contacts'>
          <Image src='/icons/phone-alt.svg' alt='map point icon' width={40} height={40} />
          <h3>Phone</h3>
          <div className='flex flex-col gap-1'>
            <p className='text-center text-Green-400'>+38 (097) 340 84 34</p>
            <p className='text-center text-Green-400'>+38 (067) 676 85 07 </p>
          </div>
        </div>
      </div>
      <div className='flex-row-reverse xl:flex'>
        <form className='mb-10 flex flex-col gap-3 lg:px-12 lg:py-20 lg:shadow-xl lg:shadow-gray-300'>
          <input type='text' placeholder='Name' alt='name field' className='input-field' />
          <div className='flex flex-col gap-3 md:flex-row'>
            <input
              type='text'
              placeholder='Your Email'
              alt='email field'
              className='input-field flex-1'
            />
            <input
              type='text'
              placeholder='Your Phone'
              alt='phone field'
              className='input-field flex-1'
            />
          </div>
          <input
            type='text'
            placeholder='Your Subject'
            alt='subject field'
            className='input-field'
          />
          <textarea className='input-field h-44' placeholder='Your Message' />

          <div>
            <button
              type='submit'
              className='cursor-pointer rounded-lg bg-Green-700 px-5 py-2 text-white transition hover:text-Yellow-500'
            >
              Submit
            </button>
          </div>
        </form>
        <div className='flex h-52 w-full items-center justify-center border border-gray-400 md:h-80 lg:h-[575px]'>
          <h1>Google map</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
