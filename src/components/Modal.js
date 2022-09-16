import React, { useRef } from 'react';
import styles from './modal.module.css';

const Modal = ({ children, url, root }) => {
  const ref = useRef(null);

  function callback() {
    root.unmount();
    // ref.current.removeEventListener('animationend', callback);
    document.querySelector('#modal').remove();
  }

  function handleClick() {
    ref.current.classList.add(styles.fadeOut);
    ref.current.addEventListener('animationend', callback, { once: true });
  }

  return (
    <div ref={ref} className={styles.modalContainer}>
      <div className={styles.modalView}>
        <div className={styles.modalHeader}>
          <div>
            <button onClick={handleClick} className={styles.closeButton}>
              X
            </button>
          </div>
        </div>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
