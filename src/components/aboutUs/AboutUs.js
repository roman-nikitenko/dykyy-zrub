import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className='mb-[50px] flex justify-center gap-[20px] p-[5px] lg:mb-[70px] lg:gap-[40px]'>
      <div className='grid items-center gap-10 md:flex'>
        <div className='grid items-center justify-center gap-[10px] lg:grid-flow-col lg:grid-rows-2 lg:gap-[16px]'>
          <div className='hidden w-[255px] overflow-hidden rounded-3xl shadow-lg shadow-gray-400 lg:row-span-2 lg:block lg:place-content-center'>
            <Image
              src='/images/house2.jpeg'
              alt='house image'
              width={255}
              height={237}
              className='transition duration-300 hover:scale-[1.1]'
            />
          </div>
          <div className='w-[300px] overflow-hidden rounded-3xl shadow-lg shadow-gray-400'>
            <Image
              src='/images/house1.jpeg'
              alt='house image'
              width={300}
              height={200}
              className='transition duration-300 hover:scale-[1.1]'
            />
          </div>
          <div className='hidden w-[300px] overflow-hidden rounded-3xl shadow-lg shadow-gray-400 md:block'>
            <Image
              src='/images/interior1.jpeg'
              alt='interior image'
              width={300}
              height={214}
              className='transition duration-300 hover:scale-[1.1]'
            />
          </div>
        </div>
        <article className='md:max-w-[400px] lg:max-w-[450px] xl:max-w-[570px] '>
          <p>
            <b>По-перше</b>, якщо здійснюється сушка бруса, то дрібні отвори можуть бути заповнені
            смолою і внаслідок цього вона перестає "дихати".
          </p>
          <br />
          <p>
            <b>По-друге </b>, деревина в клеєного бруса виступає всього лише як один з двох головних
            будівельних матеріалів. Другим є клей і саме з цієї причини дерево втрачає цілий ряд
            своїх корисних властивостей, зокрема, воно вже менш надійне, погано дихає, не
            відрізняється хорошою екологічністю і так далі. Тому вибір клеєного дуба не завжди може
            бути правильним рішенням.
          </p>
          <br />
          <p>
            А оциліндрованої колоди? Ця технологія хороша, коли ви будуєте маленькі споруди або
            додаткові споруди на зразок сараю. Однак при будівництві будинку ця технологія має цілий
            ряд недоліків. Головний з них - машинне виробництво при якому в рази падає рівень
            захисту дерева від факторів зовнішнього середовища. Можна виділити невисоку ціну даної
            споруди. Але тут же виникає головне питання: чи варто економити на найдорожчому, на
            своїй оселі, в якому ви плануєте прожити довгий час і по можливості залишити дітям і
            внукам?
          </p>
          <br />
          <p>
            Ми підходимо до заключного способу побудови дерева - ручній вирубці. Даний спосіб є
            найоптимальнішим і надійним при будові вашого житла. Це можна зробити висновок тому, що
            воно вимагає багато часу і професіоналізму, але всі корисні властивості даної технології
            з успіхом зберігаються, що забезпечує вам в майбутньому надійне і довговічне житло, що
            найголовніше.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutUs;
