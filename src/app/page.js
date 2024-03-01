import Banner from '@/components/banner/Banner';
import AboutUs from '@/components/aboutUs/AboutUs';
import Reviews from '@/components/reviews/Reviews';
import ConstructionStages from '@/components/constructionStages/ConstructionStages';

const Home = () => {
  return (
    <main className=''>
      <Banner />
      <div className='container-spaces pb-40'>
        <h1 className='decorationLine my-16'>Про нас</h1>
        <AboutUs />
        <ConstructionStages />
        <Reviews />
      </div>
    </main>
  );
};

export default Home;
