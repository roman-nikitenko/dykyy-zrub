import Stage from '@/components/constructionStages/Stage';

const ConstructionStages = () => {
  const listOfStages = [
    {
      id: 1,
      title: 'Project Planning',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dolore est illum iusto, laboriosam provident quasi quod sed sunt.',
      imageUrl: '/advatageImages/planning.svg',
      styles: '',
    },
    {
      id: 2,
      title: 'Project Management',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dolore est illum iusto, laboriosam provident quasi quod sed sunt.',
      imageUrl: '/advatageImages/management.svg',
      styles: 'md:translate-y-[60px]',
    },
    {
      id: 3,
      title: 'General Contracting',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dolore est illum iusto, laboriosam provident quasi quod sed sunt.',
      imageUrl: '/advatageImages/building.svg',
      styles: 'md:translate-y-[120px]',
    },
    {
      id: 4,
      title: 'Interior Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dolore est illum iusto, laboriosam provident quasi quod sed sunt.',
      imageUrl: '/advatageImages/design.svg',
      styles: '',
    },
    {
      id: 5,
      title: 'Exterior Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dolore est illum iusto, laboriosam provident quasi quod sed sunt.',
      imageUrl: '/advatageImages/design-tool.svg',
      styles: 'md:translate-y-[60px]',
    },
    {
      id: 6,
      title: 'Space Planning',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dolore est illum iusto, laboriosam provident quasi quod sed sunt.',
      imageUrl: '/advatageImages/planning2.svg',
      styles: 'md:translate-y-[120px]',
    },
  ];
  return (
    <>
      <section className='grid grid-cols-1 gap-5 pb-[70px] md:grid-cols-3 md:pb-[208px]'>
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
