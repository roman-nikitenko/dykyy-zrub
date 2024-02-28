import Banner from '@/components/banner/Banner';
import AboutUs from '@/components/aboutUs/AboutUs';
import OurAdvantages from '@/components/ourAdvantages/OurAdvantages';
import Reviews from '@/components/reviews/Reviews';

const Home = () => {
  return (
    <main className='grid gap-[50px] lg:gap-[70px]'>
      <Banner />
      <AboutUs />
      <OurAdvantages />
      <Reviews />
    </main>
  );
};

export default Home;
