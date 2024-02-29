import Banner from '@/components/banner/Banner';
import AboutUs from '@/components/aboutUs/AboutUs';
import Reviews from '@/components/reviews/Reviews';
import ConstructionStages from '@/components/constructionStages/ConstructionStages';


const Home = () => {
  return (
    <main className='grid gap-[50px] lg:gap-[70px]'>
      <Banner />
      <div className='xl:px-18 px-5 lg:px-12 2xl:px-40'>
        <AboutUs />
        <ConstructionStages />
        <Reviews />
      </div>
    </main>
  );
};

export default Home;
