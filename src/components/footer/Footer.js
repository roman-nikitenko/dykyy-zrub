import Navigation from '@/components/navigation/Navigation';

const Footer = () => {
  return (
    <footer className='mt-[50px] grid h-[80px] bg-Green-700 px-[5px] sm:px-[25px] lg:mt-[70px]'>
      <div className='sm:justify-self-end'>
        <Navigation hidden={true} />
      </div>
      <p className='text-[13px] font-light text-white'>
        &copy; 2024 &#x2022; Дикий Зруб &#x2022; Всі права захищено.
      </p>
    </footer>
  );
};

export default Footer;
