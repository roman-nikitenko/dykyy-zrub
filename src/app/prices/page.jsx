export const metadata = {
  title: 'Ціни',
};

const Prices = () => {
  return (
    <div className='flex justify-center'>
      <div className='container-spaces max-width-1440 pb-[50px]'>
        <h1 className='decorationLine my-12 md:my-[64px]'>Ціни</h1>
        <p className={'text-base'}>
          Ціна дерев'яного будинку залежить від багатьох факторів. На ціноутворення може впливати:
          діаметр колоди (від 18 до 50см), довжина колоди (якщо більше 6м.), технологія рубки вугла
          (канадський вугол, або традиційний вугол), обробка колоди (окороване, чи ручної
          калібровки). В основному замовляють базову комплектацію, в яку входить: зруб, стропильна
          система (брус 150Х70мм), балки перекриття, обробка антисептиком, нагеля та міжвінцевий
          утеплювач.{' '}
        </p>
        <p>
          В середньому, ціна базової комплектацїї деревяного зрубу з колоди 20-25см становить від
          3700гр за метр квадратний стіни, або ж від $180 до $350 за квадратний метр житлової площі.{' '}
        </p>
        <h3 className='mt-4'>Ціни на додаткові роботи:</h3>
        <br />
        <table className='min-w-full divide-y divide-gray-200 overflow-hidden rounded-lg shadow-md'>
          <thead className='bg-gray-50'>
            <tr>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
              >
                Робота
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
              >
                Ціна (грн/м2)
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 bg-white'>
            <tr className='hover:bg-gray-100'>
              <td className='whitespace-pre-wrap px-6 py-4 text-sm font-medium text-gray-900'>
                <h4 className='mb-1'>Криша</h4>
              </td>
              <td className='whitespace-pre-wrap px-6 py-4 text-sm font-medium text-gray-900'>
                <ul className='ml-4 list-disc'>
                  <li>Монтаж стропильної системи - 150гр/м2</li>
                  <li>Монтаж пароізоляції - 30гр/м2</li>
                  <li>Монтаж утеплювача 200 (зверху) - 100гр/м2</li>
                  <li>Монтаж гідроізоляції - 25гр/м2</li>
                  <li>Монтаж обрешітки - 80гр/м2</li>
                  <li>Монтаж лобової дошки - 70гр/п.м.</li>
                </ul>
              </td>
            </tr>
            <tr className='hover:bg-gray-100'>
              <td className='whitespace-pre-wrap px-6 py-4 text-sm font-medium text-gray-900'>
                <h4 className='mb-1'>Підлога</h4>
              </td>
              <td className='whitespace-pre-wrap px-6 py-4 text-sm font-medium text-gray-900'>
                <ul className='ml-4 list-disc'>
                  <li>Монтаж дошки підлоги + лаги - 500гр/м2</li>
                  <li>Монтаж</li>
                  <li>Монтаж ізоляційної плівки - 25гр/м2</li>
                  <li>Монтаж утеплювача 200. - 80гр/м2</li>
                  <li>Покриття лак (1 шар.) - 40гр/м2</li>
                  <li>Матування - 10гр/м2</li>
                  <li>Монтаж плінтуса - 30гр/м2</li>
                  <li>Фарбування плінтуса - 35гр/м2</li>
                </ul>
              </td>
            </tr>
            <tr className='hover:bg-gray-100'>
              <td className='whitespace-pre-wrap px-6 py-4 text-sm font-medium text-gray-900'>
                <h4 className='mb-1'>Стіни</h4>
              </td>
              <td className='whitespace-pre-wrap px-6 py-4 text-sm font-medium text-gray-900'>
                <ul className='ml-4 list-disc'>
                  <li>Шліфовка стіни - 200гр/м2</li>
                  <li>Шліфовка торців - 250гр/м2</li>
                  <li>Монтаж вагонки - 210гр/м2</li>
                  <li>Монтаж ізоляційної плівки - 27гр/м2</li>
                  <li>Фарбування. - 38гр/м2</li>
                  <li>Монтаж канату - 20гр/м2</li>
                  <li>Нанесення натурального воску - 320гр/м2</li>
                </ul>
              </td>
            </tr>
            <tr className='hover:bg-gray-100'>
              <td className='whitespace-pre-wrap px-6 py-4 text-sm font-medium text-gray-900'>
                <h4 className='mb-1'>Стеля</h4>
              </td>
              <td className='whitespace-pre-wrap px-6 py-4 text-sm font-medium text-gray-900'>
                <ul className='ml-4 list-disc'>
                  <li>Монтаж вагонки стеля (підшива) - 250гр/м2</li>
                  <li>Фарбування - 35гр/м2</li>
                  <li>Монтаж утеплювача (знизу). - 200гр/м2</li>
                  <li>Монтаж ізоляційної плівки - 35гр/m2</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <h3 className='my-4'>Вартість будівництва включає такі роботи: </h3>
        <ul className={'list-image-none'}>
          <li>✅ Збірка зрубу на нашому виробничому майданчику</li>
          <li>✅ Навантаження зрубу на автотранспорт</li>
          <li>✅ Розвантаження зрубу на території Замовника</li>
          <li>✅ Прокладка між першим вінцем зрубу і фундаментом прокладки (трам)</li>
          <li>✅ Монтаж коробки (стіни і перегородки, ті які зі зрубу)</li>
          <li>✅ З'єднання колод між собою дубовими нагелями</li>
          <li>✅ Прокладка між вінцями зрубу полотна з льону, моху або мінеральної вати</li>
          <li>✅ Монтаж балок першого і другого поверхів (балки статі, балки перекриттів)</li>
          <li>
            ✅ Обробка біо-захисним складом (антисептиком) всіх стін і пиломатеріалів зовні і
            зсередини
          </li>
          <li>✅ Обробка біо-захисним складом (антисептиком) чашок зрубу</li>
          <li>✅ Монтаж кроквяної системи, тимчасової покрівлі (за бажанням Замовника)</li>
          <li>✅ Збірка зрубу на нашому виробничому майданчику</li>
        </ul>
        <p className={'mt-4 text-base'}>
          Для прорахунку точної вартості споруди Вашого зрубу, будь ласка, вкажіть свій проект, і
          для прорахунку надішліть його на нашу електронну адресу та/або зв'яжіться з нами за
          вказаними контактами і ми надамо Вам вичерпну інформацію стосовно ваших питань та
          побажань.{' '}
        </p>
      </div>
    </div>
  );
};

export default Prices;
