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
    <section className='grid h-auto min-h-[350px] justify-items-center bg-Green-600 py-[15px] sm:grid-cols-2 lg:flex lg:items-center lg:justify-center xl:gap-[40px]'>
      {advantages.map((advantage, idx) => (
        <div
          key={idx}
          className='grid h-[180px] max-w-[260px] content-center justify-items-center gap-[15px] lg:w-[250px] xl:w-[260px]'
        >
          <div className='h-[50px] w-[50px] bg-Green-300'>
            <Image src={advantage.iconSrc} alt='icon' width={50} height={50} />
          </div>
          <span className='text-center text-[16px] text-Green-300'>{advantage.text}</span>
        </div>
      ))}
    </section>
  );
};

export default OurAdvantages;
