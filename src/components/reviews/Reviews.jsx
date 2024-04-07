'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Keyboard } from 'swiper/modules';
import ReviewCard from '@/components/reviews/ReviewCard';
import GalleryModal from '@/components/galleryModal/GalleryModal';
import { reviewsList } from '@/data/reviews';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BREAKPOINTS = {
  640: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1440: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
};

const Reviews = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [imagesList, setImagesList] = useState([]);
  const [activeImage, setActiveImage] = useState('');

  const handleOpenModal = (imageLink, imagesList) => {
    setIsModalShown(true);
    setActiveImage(imageLink);
    setImagesList(imagesList);
  };

  return (
    <section className='m-auto max-w-[1440px]'>
      <h1 className='decorationLine mb-[30px] mt-16'>Відгуки наших клієнтів </h1>
      <div className='flex justify-center'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={BREAKPOINTS}
          modules={[Autoplay, Navigation, Keyboard, Pagination]}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          keyboard={{ enabled: true }}
          loop={true}
          className='w-full'
        >
          {reviewsList.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} handleOpenModal={handleOpenModal} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <GalleryModal
        navigationInCenter
        isModalShown={isModalShown}
        activeImage={activeImage}
        imagesSrc={imagesList}
        setActiveImage={setActiveImage}
        setIsModalShown={setIsModalShown}
      />
    </section>
  );
};

export default Reviews;
