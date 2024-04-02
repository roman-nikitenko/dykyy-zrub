import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className='flex justify-center gap-[20px] p-[5px] lg:mb-[70px] lg:gap-[40px]'>
      <article className=''>
        <h1 className='decorationLine my-12'>Про нас</h1>
        <div className='grid items-center gap-10 md:flex'>
          <div className='grid items-center justify-center gap-[10px] lg:grid-flow-col lg:grid-rows-2 lg:gap-[16px]'>
            <div className='relative h-[200px] w-[300px] overflow-hidden rounded-3xl shadow-lg shadow-gray-400'>
              <Image
                src='/images/house1.jpeg'
                alt='house image'
                fill
                className='transition duration-300 hover:scale-[1.1]'
              />
            </div>
            <div className='relative hidden h-[200px] w-[300px] overflow-hidden rounded-3xl shadow-lg shadow-gray-400 md:block'>
              <Image
                src='/images/house2.jpeg'
                alt='house image'
                fill
                className='transition duration-300 hover:scale-[1.1]'
              />
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='flex flex-col'>
              <p className='mt-4 text-lg'>
                <strong className={'text-2xl font-bold'}>Дикий зруб</strong> - це компанія з
                <strong> більш ніж 10-річним досвідом</strong> на ринку, основна спеціалізація якої
                - це виготовлення будинків зі зрубу. Також наша компанія займається виготовленням
                саун, лазень, альтанок та інших виробів із закартпатського зрубу і закарпатського
                бруса.{' '}
              </p>
              <p className='mt-4 text-lg'>
                Наша команда це досвідчені майстри, які щиро люблять свою роботу та знають всі
                тонкощі роботи з деревом.{' '}
              </p>
            </div>
            {/* <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2'> */}
            {/*   <div className='flex flex-col'> */}
            {/*     <h3 className='text-2xl font-bold '>Будинки зі зрубу</h3> */}
            {/*     <p className=''> */}
            {/*       Збудуємо для вас затишний та екологічний будинок з **найкращої деревини**.{' '} */}
            {/*     </p> */}
            {/*   </div> */}
            {/*   <div className='flex flex-col'> */}
            {/*     <h3 className='text-2xl font-bold '>Вироби з дерева</h3> */}
            {/*     <p className='mt-4 text-lg'> */}
            {/*       Виготовляємо альтанки, бані, сауни та інші **вироби з дерева** за індивідуальними */}
            {/*       проектами.{' '} */}
            {/*     </p> */}
            {/*   </div> */}
            {/* </div> */}

            <div className='mt-8 flex flex-col '></div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutUs;
