import Image from 'next/image';
import dynamic from 'next/dynamic';

export const metadata = {
  title: 'Контакти',
};

const ContactForm = dynamic(() => import('@/components/contactForm/contactForm'), { ssr: false });

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
      <div className='w-full flex-row-reverse xl:flex'>
        <div className={'flex h-full w-full shrink-0 grow self-stretch md:basis-1/3'}>
          <ContactForm title={'Напишіть нам'} />
        </div>

        <div className='h-[575px] items-center justify-center overflow-hidden rounded-xl border p-2 shadow-xl shadow-gray-300 md:basis-2/3'>
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
