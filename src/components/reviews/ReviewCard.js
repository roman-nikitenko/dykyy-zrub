import { useState } from 'react';
import Image from 'next/image';
import GalleryModal from '@/components/reviews/GalleryModal';

const imagesSrc = ['/images/house1.jpeg', '/images/house2.jpeg', '/images/interior1.jpeg'];

const ReviewCard = ({ review }) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setIsModalShown(true);
    setActiveImageIndex(index);
  };

  return (
    <div className='grid h-[380px] place-content-between rounded-2xl p-[25px] shadow-md md:shadow-lg '>
      <div>
        <h2 className='pb-[5px] text-Green-light xl:text-[24px]'>{review.name}</h2>
        <p className=' font-thin italic leading-tight text-Green-700 xl:text-[15px]'>
          {review.text}
        </p>
      </div>
      <div className='flex place-content-center gap-[5px]'>
        {imagesSrc.map((imageSrc, index) => (
          <Image
            key={imageSrc}
            src={imageSrc}
            alt='house image'
            width={100}
            height={100}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      <GalleryModal
        isModalShown={isModalShown}
        activeImageIndex={activeImageIndex}
        imagesSrc={imagesSrc}
        setIsModalShown={setIsModalShown}
      />
    </div>
  );
};

export default ReviewCard;
