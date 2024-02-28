import Image from 'next/image';

const ReviewCard = ({ review }) => {
  return (
    <div className='grid h-[380px] max-h-[390px] max-w-[380px] rounded-2xl p-[25px] shadow-md sm:shadow-xl xl:max-w-[430px]'>
      <h2 className='mb-[10px] text-Green-light'>{review.name}</h2>
      <p className='mb-[35px] font-thin italic leading-tight text-Green-700'>{review.text}</p>
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
        <Image
          src={'/images/house1.jpeg'}
          alt='house image'
          width={100}
          height={100}
          className=''
        />
        <Image
          src={'/images/house2.jpeg'}
          alt='house image'
          width={100}
          height={100}
          className=''
        />
        <Image
          src={'/images/interior1.jpeg'}
          alt='house image'
          width={100}
          height={100}
          className=''
        />
      </div>
    </div>
  );
};

export default ReviewCard;
