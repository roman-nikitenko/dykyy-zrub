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
      className={classNames('flex items-center gap-24', {
        'flex-row-reverse': isEven(id),
      })}
    >
      <div className='relative h-[550px] w-[730px]'>
        <Image
          className='rounded-3xl shadow-2xl shadow-black'
          src={image}
          alt={title}
          fill={true}
          objectFit='cover'
        />
      </div>
      <article>
        <h2 className='text-8 mb-8 text-2xl'>{title}</h2>
        <p className='mb-8 text-lg'>{description}</p>
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
