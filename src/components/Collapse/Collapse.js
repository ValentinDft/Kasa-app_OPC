import styles from './collapse.module.scss';
import pictoDown from '../../assets/picto/arrow_down.png';
import pictoUp from '../../assets/picto/arrow_up.png';
import { useState } from 'react';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={styles['collapse']}
        style={{ marginBottom: isOpen ? '0px' : '30px' }}
      >
        <p>{title}</p>
        <img
          src={isOpen ? pictoUp : pictoDown}
          alt='picto'
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <p
          className={styles['collapse-content']}
          style={{ marginBottom: isOpen ? '30px' : '0px' }}
        >
          {content}
        </p>
      )}
    </>
  );
};

export default Collapse;