'use client';
import Image from 'next/image';
import classNames from 'classnames';
import { useState } from 'react';
import { Carousel } from '@material-tailwind/react';
import useNoScroll from '@/hooks/useNoScroll';

const CardWork = ({ build }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const {
    title,
    description,
    startBuild,
    endBuild,
    typeOfBuilding,
    typeOfMaterial,
    mainImage,
    images,
    id,
  } = build;
  const isEven = (n) => {
    return n % 2 === 0;
  };

  useNoScroll(isOpenModal);

  const clickHandler = () => {
    setIsOpenModal((prevState) => !prevState);
  };

  return (
    <>
      <div
        className={classNames('flex flex-col items-center gap-10 lg:flex-row xl:gap-20', {
          'lg:flex-row-reverse': isEven(id),
        })}
      >
        <div
          onClick={clickHandler}
          className='group h-[200px] w-full cursor-pointer sm:h-[450px] lg:h-[400px] xl:h-[550px] xl:w-full'
        >
          <img
            className='size-full rounded-3xl object-cover shadow-2xl shadow-black transition duration-700 hover:shadow-lg'
            src={mainImage}
            alt={title}
          />
        </div>
        <article>
          <h2 className='text-8 mb-4 text-2xl lg:mb-8'>{title}</h2>
          <p className='mb-4 text-lg lg:mb-8'>{description}</p>
          <div className='flex flex-col gap-2.5'>
            <div className='flex items-center gap-2'>
              <h3>Початок будівнитства:</h3>
              <p className='text-lg'>{startBuild}</p>
            </div>
            <div className='flex items-center gap-2'>
              <h3>Кінец будівнитства:</h3>
              <p className='text-lg'>{endBuild}</p>
            </div>
            <div className='flex items-center gap-2'>
              <h3>Тип будівнитства:</h3>
              <p className='text-lg'>{typeOfBuilding}</p>
            </div>
            <div className='flex items-center gap-2'>
              <h3>Тип матеріалу:</h3>
              <p className='text-lg'>{typeOfMaterial}</p>
            </div>
          </div>
        </article>
      </div>
      {isOpenModal && (
        <div
          id='modal'
          className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 px-5 py-16 backdrop-blur-sm'
        >
          <div className='relative'>
            <button
              onClick={clickHandler}
              className='absolute -top-12 right-0 rounded-full p-2  transition duration-300 hover:bg-white hover:bg-opacity-15'
            >
              <Image
                src='/icons/cancele2.svg'
                alt='close icon'
                width={1000}
                height={1000}
                className='size-5'
              />
            </button>
            <Carousel
              id='carousel'
              className='h-[300px] max-w-[900px] rounded-xl md:h-[450px] xl:h-[550px]'
            >
              {images.map((img) => (
                <img key={img} src={img} alt={title} className='size-full object-cover' />
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
};

export default CardWork;
