import Image from 'next/image';

export const Stage = ({ styles, imageUrl, title, description }) => {
  return (
    <div className={`border border-gray-200 p-7 ${styles}`}>
      <div className='block-advantage group transition duration-700'>
        <Image src={imageUrl} alt='planning' width={70} height={70} />
        <h2 className='transition duration-300 group-hover:text-Yellow-500'>{title}</h2>
        <p className='text-gray-400'>{description}</p>
        <div className=''>
          <button className='font-bold transition duration-300 group-hover:text-Yellow-500'>
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stage;
