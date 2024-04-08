import Banner from '@/components/banner/Banner';
import AboutUs from '@/components/aboutUs/AboutUs';
import Reviews from '@/components/reviews/Reviews';
import ConstructionStages from '@/components/constructionStages/ConstructionStages';
import AboutTechnology from '@/components/aboutTechnology/AboutTechnology';

export const metadata = {
  title: 'Головна | Дикий зруб',
};

const Home = () => {
  return (
    <>
      <Banner />
      <div className='flex justify-center'>
        <div className='container-spaces w-full max-w-[1440px]'>
          <AboutTechnology />
          <AboutUs />
          <ConstructionStages />
          <Reviews />
        </div>
      </div>
    </>
  );
};

export default Home;
