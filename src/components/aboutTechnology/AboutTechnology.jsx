import Image from 'next/image';

const AboutTechnology = () => {
  return (
    <section>
      <article>
        <h1 className='decorationLine mb-[30px] mt-16'>Будівництво з дикого зрубу</h1>
        <div className={'flex flex-col gap-8 md:flex-row'}>
          <div className='content'>
            <h3 className={' uppercase text-Yellow-500'}>Про технологію:</h3>
            <p className={'mt-2'}>
              Дерев'яні будинки ручної рубки - найстаріший, випробуваний спосіб будівництва
              дерев'яних зрубів будинків, що дійшли до нас практично без змін.{' '}
            </p>
            <p className={'mt-2'}>
              В наш час будинки з дикого зрубу залишаються актуальними, зберігаючи свої переваги і
              унікальний зовнішній вигляд. Ця технологія передбачає виключно ручну працю на кожному
              етапі будівництва, що гарантує високу якість збірки, недосяжну для машинного
              виробництва. А під терміном "якісне дерево" зазвичай розуміють, перш за все, дерево
              грамотно оброблене. Про престиж ручної роботи говорити не доводиться, адже з
              давніх-давен дерево обробляли вручну, і саме тоді підхід був ретельним і
              індивідуальним. Майстри обтісують кожну колоду від кори, вирізують поздовжні посадкові
              пази та кутові з'єднання (переруби). Існує кілька способів карбування кутових
              з'єднань, але наша компанія використовує "канадську чашку", яка дозволяє максимально
              закривати щілини при усадці будинку.{' '}
            </p>
            <p className={'mt-2'}>
              Після збирання конструкції деревини, їй потрібно дати вистоятися більше року для
              природного висушування. Потім проводяться всі інші роботи. Такий будинок завжди
              забезпечує оптимальну температуру, затримуючи тепло взимку і надаючи прохолоду влітку
              своїм мешканцям.{' '}
            </p>
          </div>
          <div className='images'>
            <div className='hidden grid-rows-1 place-items-center justify-center gap-16 self-center md:grid'>
              <div className='relative h-[200px] w-[300px] overflow-hidden rounded-3xl shadow-lg shadow-gray-400'>
                <Image
                  src='/images/aboutTechnology/01_1.jpg'
                  alt='house image'
                  fill
                  className='transition duration-300 hover:scale-[1.1]'
                />
              </div>
              <div className='relative h-[200px] w-[300px] overflow-hidden rounded-3xl shadow-lg shadow-gray-400 md:block'>
                <Image
                  src='/images/aboutTechnology/01_2.jpg'
                  alt='house image'
                  fill
                  className='transition duration-300 hover:scale-[1.1]'
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutTechnology;
