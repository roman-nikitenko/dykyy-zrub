import Banner from '@/components/banner/Banner';
import AboutUs from '@/components/aboutUs/AboutUs';
import Reviews from '@/components/reviews/Reviews';
import ConstructionStages from '@/components/constructionStages/ConstructionStages';

const Home = () => {
  return (
    <main className=''>
      <Banner />
      <div className='flex justify-center'>
        <div className='container-spaces w-full max-w-[1440px] pb-40'>
          <h1 className='decorationLine my-16'>Про нас</h1>
          <AboutUs />
          <ConstructionStages />
          <Reviews />
        </div>
      </div>
    </main>
  );
};

export default Home;
