import Image from 'next/image';
import classNames from 'classnames';

const CardWork = ({ build }) => {
  const { title, description, startBuild, endBuild, typeOfBuilding, typeOfMaterial, image, id } =
    build;
  const isEven = (n) => {
    return n % 2 === 0;
  };
  return (
    <div
      className={classNames('flex flex-col items-center gap-10 lg:flex-row xl:gap-20', {
        'lg:flex-row-reverse': isEven(id),
      })}
    >
      <div className='relative h-[200px] w-full sm:h-[450px] lg:h-[400px] xl:h-[550px] xl:w-full'>
        <Image
          className='rounded-3xl shadow-2xl shadow-black'
          src={image}
          alt={title}
          fill
          objectFit='cover'
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
  );
};

export default CardWork;
