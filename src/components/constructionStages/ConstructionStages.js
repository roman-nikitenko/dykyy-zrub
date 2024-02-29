import Stage from '@/components/constructionStages/Stage';
import { listOfStages } from '@/data/listOfStages';

const ConstructionStages = () => {
  return (
    <>
      <section className='grid grid-cols-1 gap-5 md:grid-cols-3'>
        {listOfStages.map((stage) => {
          const { title, imageUrl, description, styles, id } = stage;
          return (
            <Stage
              key={id}
              styles={styles}
              description={description}
              title={title}
              imageUrl={imageUrl}
            />
          );
        })}
      </section>
    </>
  );
};

export default ConstructionStages;
