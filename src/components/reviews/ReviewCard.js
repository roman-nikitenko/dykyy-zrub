import Image from 'next/image';

const ReviewCard = ({ review }) => {
  return (
    <div className='grid h-[380px] place-content-between rounded-2xl p-[25px] shadow-md md:shadow-lg '>
      <div>
        <h2 className='pb-[5px] text-Green-light xl:text-[24px]'>{review.name}</h2>
        <p className=' font-thin italic leading-tight text-Green-700 xl:text-[15px]'>
          {review.text}
        </p>
      </div>
      <div className='flex place-content-center gap-[5px]'>
        {/*{review.images.map(imageSrc => (*/}
        {/*  <Image*/}
        {/*    src={imageSrc}*/}
        {/*    alt='house image'*/}
        {/*    width={100}*/}
        {/*    height={100}*/}
        {/*    className=''*/}
        {/*  />*/}
        {/*))}*/}
        <Image src={'/images/house1.jpeg'} alt='house image' width={95} height={95} className='' />
        <Image src={'/images/house2.jpeg'} alt='house image' width={95} height={95} className='' />
        <Image
          src={'/images/interior1.jpeg'}
          alt='house image'
          width={95}
          height={95}
          className=''
        />
      </div>
    </div>
  );
};

export default ReviewCard;
