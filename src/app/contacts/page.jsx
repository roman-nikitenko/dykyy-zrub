import Image from 'next/image';

export const metadata = {
  title: 'Контакти',
};

const Contacts = () => {
  return (
    <div className='container-spaces max-width-1440 m-auto'>
      <h1 className='decorationLine my-12 md:my-[64px]'>Контакти</h1>
      <div className='mb-10 grid grid-cols-1 justify-center gap-5 md:grid-cols-3 lg:flex xl:justify-between'>
        <div className='block-contacts'>
          <Image src='/icons/market-map.svg' alt='map point icon' width={40} height={40} />
          <h3>Локація</h3>
          <p className='text-center text-Green-400'>
            Україна с. Колочава Закарпатська обл. Межигірський р-н.{' '}
          </p>
        </div>
        <div className='block-contacts'>
          <Image src='/icons/envelope-mail.svg' alt='map point icon' width={40} height={40} />
          <h3>Email адреса</h3>
          <a href='mailto:dykyy-zrub@ukr.net' className='hover-contacts text-center text-Green-400'>
            dykyy-zrub@ukr.net
          </a>
        </div>

        <div className='block-contacts'>
          <Image src='/icons/phone-alt.svg' alt='map point icon' width={40} height={40} />
          <h3>Телефон</h3>
          <div className='flex flex-col gap-1'>
            <a href='tel:+38 (097) 340 84 34' className='hover-contacts text-center text-Green-400'>
              +38 (097) 340 84 34
            </a>
            <a href='tel:+38 (067) 676 85 07' className='hover-contacts text-center text-Green-400'>
              +38 (067) 676 85 07{' '}
            </a>
          </div>
        </div>
      </div>
      <div className='flex-row-reverse xl:flex'>
        <form className='flex flex-col gap-3 py-8 lg:px-12 lg:py-20 lg:shadow-xl lg:shadow-gray-300'>
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
        <div className='h-[575px] w-full items-center justify-center overflow-hidden rounded-xl border p-2 lg:shadow-xl lg:shadow-gray-300'>
          <iframe
            src='https://storage.googleapis.com/maps-solutions-ibfjwe1gin/commutes/ianq/commutes.html'
            width='100%'
            height='100%'
            loading='lazy'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
