import Image from 'next/image';

const ReviewCard = ({ review, handleOpenModal }) => {
  return (
    <div className='grid h-[380px] place-content-between rounded-2xl p-[25px] shadow-md md:shadow-lg'>
      <div>
        <h2 className='pb-[5px] text-Green-light xl:text-[24px]'>{review.name}</h2>
        <p className='h-[195px] overflow-y-auto font-thin italic leading-tight text-Green-700 xl:h-[190px] xl:text-[15px]'>
          {review.text}
        </p>
      </div>
      <div className='flex place-content-center gap-[5px]'>
        {review.images.map(({ imageLink }, index) => (
          <Image
            key={imageLink}
            src={imageLink}
            alt='house image'
            width={75}
            height={75}
            onClick={() => handleOpenModal(index, review.images)}
            className='h-[80px] w-[80px] rounded-md object-cover'
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
