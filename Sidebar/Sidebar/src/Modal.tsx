import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import { useGlobalContext } from './Context';

const Modal = () => {
    const { isModalOpen, closeModal } = useGlobalContext();
    return (
        <div
        className={`${
          isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
        }`}
      >
        <div className='modal-container'>
          <h3>modal content</h3>
          <button className='close-modal-btn' onClick={closeModal}>
            <CancelIcon></CancelIcon>
          </button>
        </div>
      </div>
  );
};

export default Modal;