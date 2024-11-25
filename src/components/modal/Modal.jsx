import React from 'react';

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null; // Если модальное окно не открыто, не рендерим его

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-[30px] rounded-lg shadow-lg w-96">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
