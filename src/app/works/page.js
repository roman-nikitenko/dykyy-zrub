import CardWork from '@/components/works/CardWork';
import { worksList } from '@/data/works';

const Works = () => {
  return (
    <section className='px-40'>
      <h1 className='decorationLine my-16'>Наші роботи</h1>
      <div className='flex flex-col gap-32'>
        {worksList.map((build) => (
          <CardWork key={build.id} build={build} />
        ))}
      </div>
    </section>
  );
};

export default Works;
