import Banner from '@/components/baner/Banner';
import AboutUs from '@/components/aboutUs/AboutUs';
import OurAdvantages from '@/components/ourAdvantages/OurAdvantages';

const Home = () => {
  return (
    <main className='grid gap-[70px]'>
      <Banner />
      <AboutUs />
      <OurAdvantages />
    </main>
  );
};

export default Home;
