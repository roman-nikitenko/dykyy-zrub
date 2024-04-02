import CardWork from '@/components/works/CardWork';
import { worksList } from '@/data/works';

export const metadata = {
  title: 'Наші роботи',
};

const Works = () => {
  return (
    <section className='flex justify-center '>
      <div className='container-spaces max-width-1440 pb-[100px] lg:pb-[160px]'>
        <h1 className='decorationLine my-12 md:my-[64px]'>Наші роботи</h1>
        <div className='flex flex-col gap-16 lg:gap-32'>
          {worksList.map((build) => (
            <CardWork key={build.id} build={build} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
