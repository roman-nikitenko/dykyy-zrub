import CardWork from '@/components/works/CardWork';
import { worksList } from '@/data/works';

const Works = () => {
  return (
    <section className='flex justify-center '>
      <div className='container-spaces max-width-1440 pb-[100px] lg:pb-[160px]'>
        <h1 className='decorationLine mb-[50px] mt-[64px] md:my-[64px]'>Наші роботи</h1>
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
