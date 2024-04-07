import Stage from '@/components/constructionStages/Stage';

const ConstructionStages = () => {
  const listOfStages = [
    {
      id: 1,
      title: 'Project Planning',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dolore est illum iusto, laboriosam provident quasi quod sed sunt.',
      imageUrl: '/images/advantageImages/planning.svg',
      styles: '',
    },
    {
      id: 2,
      title: 'Project Management',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dolore est illum iusto, laboriosam provident quasi quod sed sunt.',
      imageUrl: '/images/advantageImages/management.svg',
      styles: 'md:translate-y-[60px]',
    },
    {
      id: 3,
      title: 'General Contracting',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dolore est illum iusto, laboriosam provident quasi quod sed sunt.',
      imageUrl: '/images/advantageImages/building.svg',
      styles: 'md:translate-y-[120px]',
    },
    {
      id: 4,
      title: 'Interior Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dolore est illum iusto, laboriosam provident quasi quod sed sunt.',
      imageUrl: '/images/advantageImages/design.svg',
      styles: '',
    },
    {
      id: 5,
      title: 'Exterior Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dolore est illum iusto, laboriosam provident quasi quod sed sunt.',
      imageUrl: '/images/advantageImages/design-tool.svg',
      styles: 'md:translate-y-[60px]',
    },
    {
      id: 6,
      title: 'Space Planning',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dolore est illum iusto, laboriosam provident quasi quod sed sunt.',
      imageUrl: '/images/advantageImages/planning2.svg',
      styles: 'md:translate-y-[120px]',
    },
  ];
  return (
    <>
      <section>
        <h1 className='decorationLine mb-[30px] mt-[64px] md:my-[64px]'>Стадії виробництва</h1>
        <div className='grid grid-cols-1 gap-5 pb-[70px] md:grid-cols-3 md:pb-[208px]'>
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
        </div>
      </section>
    </>
  );
};

export default ConstructionStages;