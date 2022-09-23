import React from 'react';

import './Modal.scss';

export default function Modal({
  children,
  loginModal,
  searchModal,
  itemModal,
  handleToggleLogin,
  handleToggleSearch,
  handleToggleItem,
}) {
  const handleClickOutsideModal = e => {
    if (loginModal) {
      handleToggleLogin();
    }

    // if (searchModal) {
    //   handleToggleSearch();
    // }

    // if (itemModal) {
    //   handleToggleItem();
    // }
  };

  const getModalClass = () => {
    if (loginModal) return 'modalLoginContainer';
    if (searchModal) return 'modalSearchContainer';
    if (itemModal) return 'modalItemContainer';
  };

  return (
    <div className={getModalClass()} onClick={handleClickOutsideModal}>
      {children}
    </div>
  );
}
