import Stage from '@/components/constructionStages/Stage';

const ConstructionStages = () => {
  const listOfStages = [
    {
      id: 1,
      title: 'Планування та дизайн',
      description:
        'Цей початковий крок включає концептуалізацію будівлі, створення архітектурних проектів, отримання необхідних дозволів і забезпечення відповідності місцевим нормам. Архітектори, інженери та дизайнери співпрацюють, щоб окреслити структуру, функціональність та естетичні аспекти споруди.',
      imageUrl: '/images/advantageImages/planning.svg',
      styles: '',
    },
    {
      id: 2,
      title: 'Підготовка майданчика',
      description:
        'Після завершення розробки проекту та отримання дозволів починається етап підготовки ділянки. Це передбачає розчищення будівельної території, планування землі для створення рівної поверхні та встановлення тимчасових об’єктів, таких як огорожа та інженерні комунікації.',
      imageUrl: '/images/advantageImages/management.svg',
      styles: 'md:translate-y-[60px]',
    },
    {
      id: 3,
      title: 'Будівництво фундаменту',
      description:
        'Роботи з фундаменту є критично важливими, оскільки вони забезпечують структурну опору та стабільність будівлі. Залежно від таких факторів, як умови ґрунту та вимоги до будівництва, можуть бути споруджені різні типи фундаментів, як-от плита на рівні, простір для повзання або підвал.',
      imageUrl: '/images/advantageImages/building.svg',
      styles: 'md:translate-y-[120px]',
    },
    {
      id: 4,
      title: 'Будівництво',
      description:
        'Після створення фундаменту починається власне будівництво будівлі. На цьому етапі зводиться каркас конструкції, включаючи стіни, перекриття і дах. Кваліфіковані робітники, такі як теслі, муляри та електрики, працюють разом, щоб зібрати будівельні компоненти відповідно до архітектурних планів.',
      imageUrl: '/images/advantageImages/design.svg',
      styles: '',
    },
    {
      id: 5,
      title: 'Внутрішнє оздоблення',
      description:
        'Після завершення обшивки будівлі починаються внутрішні оздоблювальні роботи. Це включає в себе встановлення ізоляції, гіпсокартону, підлоги, сантехніки, електропроводки та систем ОВКВ. Для покращення естетики та функціональності внутрішніх приміщень також можуть бути залучені дизайнери інтер’єру.',
      imageUrl: '/images/advantageImages/design-tool.svg',
      styles: 'md:translate-y-[60px]',
    },
    {
      id: 6,
      title: 'Зовнішня обробка та ландшафтний дизайн',
      description:
        'Останній крок передбачає додавання зовнішньої обробки, такої як сайдинг, фарба, вікна та двері, щоб завершити зовнішній вигляд будівлі. Елементи ландшафтного дизайну, такі як тротуари, під’їзні шляхи, зелені насадження та зовнішні зручності, також встановлюються, щоб покращити оточення та створити затишне середовище.',
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
