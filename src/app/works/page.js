import CardWork from '@/components/works/CardWork';
import { worksList } from '@/data/works';

const Works = () => {
  return (
    <section className='flex justify-center '>
      <div className='container-spaces max-width-1440 pb-40'>
        <h1 className='decorationLine my-16'>Наші роботи</h1>
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
