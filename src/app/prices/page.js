const Prices = () => {
  return (
    <div className='xl:px-18 px-5 lg:px-12 2xl:px-40'>
      <h1 className='decorationLine my-16'>Ціни</h1>
      <div className='flex flex-col gap-4'>
        <p className='text-lg italic'>
          Вартість будівництва будинку зі зрубу коливається від 3700грн за м2 стіни
        </p>
        <h2>Вартість будівництва включає такі роботи:</h2>
        <ul className='list-disc pl-7'>
          <li>Збірка зрубу на нашому виробничому майданчику;</li>
          <li>Навантаження зрубу на автотранспорт;</li>
          <li>Доставка зрубу Замовнику в будь-яку точку України.</li>
          <li>Розвантаження зрубу на території Замовника;</li>
          <li>Прокладка між першим вінцем зрубу і фундаментом прокладки (трам);</li>
          <li>Монтаж коробки (стіни і перегородки, ті які зі зрубу);</li>
          <li>З'єднання колод між собою дубовими нагелями;</li>
          <li>Прокладка між вінцями зрубу полотна з льону, моху або мінеральної вати;</li>
          <li>Монтаж балок першого і другого поверхів (балки статі, балки перекриттів);</li>
          <li>
            Обробка біо-захисним складом (антисептиком) всіх стін і пиломатеріалів зовні і
            зсередини;
          </li>
          <li>Обробка біо-захисним складом (антисептиком) чашок зрубу;</li>
          <li>Монтаж кроквяної системи, тимчасової покрівлі (за бажанням Замовника);</li>
        </ul>
        Вартість будівництва кожного зрубу є індивідуальною і залежить від багатьох факторів
        (діаметр колоди, кількість матеріалу, технологія збірки, місцезнаходження Замовника та ін.).
        Для прорахунку точної вартості споруди Вашого зрубу, будь ласка, вкажіть свій проект, і для
        прорахунку надішліть його на нашу електронну адресу та/або зв'яжіться з нами за вказаними
        контактами і ми надамо Вам вичерпну інформацію стосовно ваших питань та побажань.
      </div>
    </div>
  );
};

export default Prices;
