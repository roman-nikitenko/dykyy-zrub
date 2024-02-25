'use client';
import classNames from 'classnames';

import { useEffect, useRef, useState } from 'react';

const Frame = ({
  children,
  closeOnClickOutside = true,
  closeOnEsc = true,
  onClose,
  open = true,
}) => {
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
    <div className='flex w-full flex-col items-center justify-center'>
      {/* overlay */}
      <div
        className={classNames(
          'fixed inset-0 z-10 bg-gray-600/80 p-8 text-white',
          `${open ? 'visible' : 'invisible'}`
        )}
        onClick={closeOnClickOutside ? onOverlayClick : undefined}
      >
        <div className='relative mx-auto mt-8 w-full max-w-sm' ref={container}>
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
    </div>
  );
};

export const Modal = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className='rounded-[8px] border border-Yellow-500 bg-Yellow-500 px-[15px] py-[6px] text-[12px] font-bold tracking-wide text-white hover:border-Brown-500 hover:bg-Brown-500 lg:px-[24px] lg:py-[8px] lg:text-[15px] xl:px-[35px] xl:py-[11px] xl:text-[18px]'
        onClick={() => setOpen(true)}
      >
        Open the modal
      </button>
      <Frame
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className='block bg-green-700 p-4'>
          <h1 className='text-lg'>{title}</h1>
        </div>
        {/* <div className="p-4"> */}
        {/*   <div className="flex flex-col space-y-2"> */}
        {/*     <input className="text-gray-800 outline-none border-2 border-white focus:border-blue-300 p-1" */}
        {/*       placeholder="Username" /> */}
        {/*     <input className="text-gray-800 outline-none border-2 border-white focus:border-blue-300 p-1" */}
        {/*       placeholder="Password" */}
        {/*       type="password" /> */}
        {/*     <button className="text-gray-100 border-2 border-blue-700 bg-blue-600 rounded shadow-xl p-2 outline-none focus:border-blue-300"> */}
        {/*       Sign in */}
        {/*     </button> */}
        {/*   </div> */}
        {/* </div> */}
        {children}
      </Frame>
    </>
  );
};
