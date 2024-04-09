'use client';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import useNoScroll from '@/hooks/useNoScroll';

import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('@/components/contactForm/contactForm'), { ssr: false });
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

export const Modal = ({ buttonTitle, children }) => {
  const [open, setOpen] = useState(false);

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
        <ContactForm onSubmitSuccess={() => setOpen(false)} />
        {children}
      </Frame>
    </>
  );
};
