import React from 'react';
import { Dialog } from '@material-tailwind/react';

const Modal = ({ isModalShown, setIsModalShown, children }) => {
  const handleToggleModal = () => setIsModalShown((prev) => !prev);

  return (
    <Dialog
      size='xl'
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      open={isModalShown}
      handler={handleToggleModal}
      className='h-[640px] bg-transparent shadow-2xl'
    >
      {children}
    </Dialog>
  );
};

export default Modal;
