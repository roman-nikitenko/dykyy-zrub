import Image from 'next/image';

const OurAdvantages = () => {
  return (
    <>
      <section className='grid grid-cols-1 gap-5 md:grid-cols-3'>
        <div className='border  border-gray-200 p-7'>
          <div className='block-advantage group transition duration-700'>
            <Image src='/advatageImages/planning.svg' alt='planning' width={70} height={70} />
            <h2 className='transition duration-300 group-hover:text-Yellow-500'>
              Project Planning
            </h2>
            <p className='text-gray-400'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dolore
              est illum iusto, laboriosam provident quasi quod sed sunt.
            </p>
            <div className=''>
              <button className='font-bold transition duration-300 group-hover:text-Yellow-500'>
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className='border border-gray-200 p-7 md:translate-y-[60px]'>
          <div className='block-advantage group transition duration-700'>
            <Image src='/advatageImages/management.svg' alt='planning' width={70} height={70} />
            <h2 className='transition duration-300 group-hover:text-Yellow-500'>
              Project Management
            </h2>
            <p className='text-gray-400'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dolore
              est illum iusto, laboriosam provident quasi quod sed sunt.
            </p>
            <div className=''>
              <button className='font-bold transition duration-300 group-hover:text-Yellow-500'>
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className='border border-gray-200 p-7 md:translate-y-[120px]'>
          <div className='block-advantage group transition duration-700'>
            <Image src='/advatageImages/building.svg' alt='planning' width={70} height={70} />
            <h2 className='transition duration-300 group-hover:text-Yellow-500'>
              General Contracting
            </h2>
            <p className='text-gray-400'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dolore
              est illum iusto, laboriosam provident quasi quod sed sunt.
            </p>
            <div className=''>
              <button className='font-bold transition duration-300 group-hover:text-Yellow-500'>
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className='border border-gray-200 p-7'>
          <div className='block-advantage group transition duration-700'>
            <Image src='/advatageImages/design.svg' alt='planning' width={70} height={70} />
            <h2 className='transition duration-300 group-hover:text-Yellow-500'>Interior Design</h2>
            <p className='text-gray-400'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dolore
              est illum iusto, laboriosam provident quasi quod sed sunt.
            </p>
            <div className=''>
              <button className='font-bold transition duration-300 group-hover:text-Yellow-500'>
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className='border border-gray-200 p-7 md:translate-y-[60px]'>
          <div className='block-advantage group transition duration-700'>
            <Image src='/advatageImages/design-tool.svg' alt='planning' width={70} height={70} />
            <h2 className='transition duration-300 group-hover:text-Yellow-500'>Exterior Design</h2>
            <p className='text-gray-400'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dolore
              est illum iusto, laboriosam provident quasi quod sed sunt.
            </p>
            <div className=''>
              <button className='font-bold transition duration-300 group-hover:text-Yellow-500'>
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className='border border-gray-200 p-7 md:translate-y-[120px]'>
          <div className='block-advantage group transition duration-700'>
            <Image src='/advatageImages/planning2.svg' alt='planning' width={70} height={70} />
            <h2 className='transition duration-300 group-hover:text-Yellow-500'>Space Planning</h2>
            <p className='text-gray-400'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dolore
              est illum iusto, laboriosam provident quasi quod sed sunt.
            </p>
            <div className=''>
              <button className='font-bold transition duration-300 group-hover:text-Yellow-500'>
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurAdvantages;
