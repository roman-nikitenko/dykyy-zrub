import Banner from '@/components/banner/Banner';
import AboutUs from '@/components/aboutUs/AboutUs';
import Reviews from '@/components/reviews/Reviews';
import ConstructionStages from '@/components/constructionStages/ConstructionStages';

export const metadata = {
  title: 'Головна | Дикий зруб',
};

const Home = () => {
  return (
    <main>
      <Banner />
      <div className='flex justify-center'>
        <div className='container-spaces w-full max-w-[1440px] pb-[100px] lg:pb-[160px]'>
          <h1 className='decorationLine mb-[30px] mt-[64px] md:my-[64px]'>Про нас</h1>
          <AboutUs />
          <ConstructionStages />
          <Reviews />
        </div>
      </div>
    </main>
  );
};

export default Home;
