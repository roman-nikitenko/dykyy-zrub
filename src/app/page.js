import Banner from '@/components/banner/Banner';
import AboutUs from '@/components/aboutUs/AboutUs';
import Reviews from '@/components/reviews/Reviews';
import ConstructionStages from '@/components/constructionStages/ConstructionStages';

const Home = () => {
  return (
    <main className=''>
      <Banner />
      <div className='container-spaces pb-[100px] lg:pb-[160px]'>
        <h1 className='decorationLine mb-[30px] mt-[64px] md:my-[64px]'>Про нас</h1>
        <AboutUs />
        <ConstructionStages />
        <Reviews />
      </div>
    </main>
  );
};

export default Home;
