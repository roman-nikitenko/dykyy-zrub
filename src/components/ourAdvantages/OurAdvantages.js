import Image from "next/image";

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
     <section className='h-[400px] flex justify-center items-center gap-[40px] bg-Green-600'>
       {advantages.map(advantage=> (
         <div className='w-[260px] h-[180px] grid justify-items-center content-center gap-[15px]'>
           <div className='w-[50px] h-[50px] bg-Green-300'>
             <Image src={advantage.iconSrc} alt='icon' width={50} height={50}/>
           </div>
           <span className='text-center text-[16px] text-Green-300'>{advantage.text}</span>
         </div>
       ))}
     </section>
  );
};

export default OurAdvantages;
