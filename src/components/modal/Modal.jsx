'use client';
import classNames from 'classnames';
import { toast } from 'react-toastify';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import useNoScroll from '@/hooks/useNoScroll';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/lib/utils/sendEmail';

const Frame = ({
  children,
  closeOnClickOutside = true,
  closeOnEsc = true,
  onClose,
  open = true,
}) => {
  useNoScroll(open);

  useEffect(() => {
    const onKeyPress = (e) => {
      if (closeOnEsc && open && e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyPress);
    return () => window.removeEventListener('keydown', onKeyPress);
  }, [closeOnEsc, onClose, open]);

  const container = useRef(null);
  const onOverlayClick = (e) => {
    if (!container.current?.contains(e.target)) onClose();
  };

  return (
    // transparent overlay: `inset-0` to stretch over the entire screen (combines`top-0`, `right-0`, `bottom-0`, and `left-0`)

    <div
      className={classNames(
        'fixed inset-0 z-10 bg-gray-600/80 p-8 text-white',
        `${open ? 'visible' : 'invisible'}`
      )}
      onClick={closeOnClickOutside ? onOverlayClick : undefined}
    >
      <div className='relative top-2/4 mx-auto w-full max-w-sm -translate-y-2/4' ref={container}>
        <button
          className='absolute -right-2 -top-2 flex h-8 w-8 cursor-pointer justify-center rounded-full bg-gray-600 shadow-xl'
          onClick={onClose}
          title='Bye bye'
        >
          <span className='select-none text-2xl leading-7'>&times;</span>
        </button>
        <div className='overflow-hidden rounded bg-gray-800 shadow-xl'>{children}</div>
      </div>
    </div>
  );
};

export const Modal = ({ buttonTitle, title, children }) => {
  const [open, setOpen] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitDisabled(true);
    console.log('values', data);
    try {
      const res = await sendEmail(data);
      if (!res.ok) {
        toast.error('Помилка при надсиланні повідомлення. Оновіть сторінку та спробуйте ще раз');
      }
      toast.success('Дякуємо! Ми звяжемось з вами протягом доби');
      setOpen(false);
      reset();
    } catch (e) {
      toast.error('Помилка при надсиланні повідомлення. Оновіть сторінку та спробуйте ще раз');
    } finally {
      setIsSubmitDisabled(false);
    }
  };
  const defaultClassNames =
    'rounded-[8px] border border-Yellow-500 bg-Yellow-500 px-[15px] py-[6px] text-[12px] font-bold tracking-wide text-white hover:border-Brown-500 hover:bg-Brown-500 lg:px-[24px] lg:py-[8px] lg:text-[15px] xl:px-[35px] xl:py-[11px] xl:text-[18px]';
  const btnClassnames =
    'justify-self-center flex no-wrap justify-center leading-8 text-nowrap rounded-[8px]  bg-Yellow-500 px-3 py-1 font-bold tracking-wide text-white transition hover:bg-yellow-800 md:block xl:text-12 max-h-full';

  // TODO: separate form from Modal component
  return (
    <>
      <button className={btnClassnames || defaultClassNames} onClick={() => setOpen(true)}>
        <span className='hidden xl:inline-flex'>{buttonTitle || 'Задати питання'}</span>
        <div className='relative size-6 justify-center xl:inline-flex'>
          <Image src='/icons/message.svg' alt='ask question icon' fill />
        </div>
      </button>
      <Frame
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className=' max-w-sm  rounded-lg p-4 shadow-md'>
          <h1 className='text-lg'>{title}</h1>
          <form className={'align-center mx-auto flex flex-col'} onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
              <label htmlFor='name' className='block text-sm font-medium text-yellow-50'>
                Ваше імя
              </label>
              <input
                type='text'
                id='name'
                {...register('name', { required: true })}
                className='form-control block w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-1 focus:ring-indigo-500'
                placeholder='Іван'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='phone' className='block text-sm font-medium text-yellow-50'>
                Телефон
              </label>
              <input
                type='tel'
                id='phone'
                {...register('phone', { required: true })}
                className='form-control block w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-1 focus:ring-indigo-500'
                placeholder='0671234567'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-sm font-medium text-yellow-50'>
                Ваш Email
              </label>
              <input
                type='email'
                id='email'
                {...register('email', { required: true })}
                className=' form-control block w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-1 focus:ring-indigo-500'
                placeholder='myemail@example.com'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='message' className='block text-sm font-medium text-yellow-50'>
                Питання
              </label>
              <textarea
                id='message'
                {...register('message', { required: true })}
                className='form-control block h-32 w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-1 focus:ring-indigo-500'
                placeholder='Напишіть ваше запитання тут'
              />
            </div>
            <button
              disabled={isSubmitDisabled}
              type='submit'
              className='inline-flex items-center justify-center rounded-md bg-yellow-800 px-4 py-2 font-bold text-white hover:bg-Yellow-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-400'
            >
              Відправити питання
            </button>
          </form>
        </div>
        {children}
      </Frame>
    </>
  );
};
