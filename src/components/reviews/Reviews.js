'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Keyboard } from 'swiper/modules';
import ReviewCard from '@/components/reviews/ReviewCard';
import { reviewsList } from '@/data/reviews';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const breakpoints = {
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
  return (
    <section className='m-auto max-w-[1440px]'>
      <h2 className='decorationLine mb-[5px] text-[30px] font-bold text-Green-700 sm:mb-[20px] lg:mb-[25px] lg:text-[35px] xl:mb-[40px] xl:text-[42px]'>
        Відгуки наших клієнтів
      </h2>
      <div className='flex justify-center'>
        <Swiper
          slidesPerView={1}
          breakpoints={breakpoints}
          modules={[Autoplay, Navigation, Keyboard, Pagination]}
          navigation
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          loop={true}
          className='w-[380px] sm:w-[640px] md:w-[750px] lg:w-[1000px] xl:w-[1300px]'
        >
          {reviewsList.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
