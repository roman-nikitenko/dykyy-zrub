import Image from 'next/image';

const advantages = [
  {
    iconSrc: '',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    iconSrc: '',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    iconSrc: '',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    iconSrc: '',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];

const OurAdvantages = () => {
  return (
    <section className='flex h-[400px] items-center justify-center gap-[40px] bg-Green-600'>
      {advantages.map((advantage, idx) => (
        <div
          key={idx}
          className='grid h-[180px] w-[260px] content-center justify-items-center gap-[15px]'
        >
          <div className='h-[50px] w-[50px] bg-Green-300'>
            <Image
              src={advantage.iconSrc}
              alt='icon'
              width={50}
              height={50}
            />
          </div>
          <span className='text-center text-[16px] text-Green-300'>
            {advantage.text}
          </span>
        </div>
      ))}
    </section>
  );
};

export default OurAdvantages;
