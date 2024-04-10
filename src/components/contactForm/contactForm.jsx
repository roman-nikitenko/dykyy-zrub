'use client';

import { useForm } from 'react-hook-form';
import { sendEmail } from '@/lib/utils/sendEmail';
import { toast } from 'react-toastify';
import { useState } from 'react';
import classNames from 'classnames';

const ContactForm = ({ labelColor, onSubmitSuccess, title }) => {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitDisabled(true);
    try {
      const res = await sendEmail(data);
      if (!res.ok) {
        toast.error('Помилка при надсиланні повідомлення. Оновіть сторінку та спробуйте ще раз');
      }
      toast.success('Дякуємо! Ми звяжемось з вами протягом доби');
      onSubmitSuccess?.();
      reset();
    } catch (e) {
      toast.error('Помилка при надсиланні повідомлення. Оновіть сторінку та спробуйте ще раз');
    } finally {
      setIsSubmitDisabled(false);
    }
  };

  const labelClassNames = classNames(
    'block text-sm font-medium m-2',
    `text-${labelColor || 'black'}`
  );

  return (
    <div className='h-full w-full rounded-lg p-4 shadow-md'>
      <h1 className='text-center text-xl sm:text-3xl'>{title}</h1>
      <form className={'align-center mx-auto flex flex-col'} onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label htmlFor='name' className={labelClassNames}>
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
          <label htmlFor='phone' className={labelClassNames}>
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
          <label htmlFor='email' className={labelClassNames}>
            Ваш Email
          </label>
          <input
            type='email'
            id='email'
            {...register('email', { required: true })}
            className='form-control block w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-1 focus:ring-indigo-500'
            placeholder='myemail@example.com'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='message' className={labelClassNames}>
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
  );
};

export default ContactForm;
