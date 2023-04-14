import styles from './collapse.module.scss';
import pictoDown from '../../assets/picto/arrow_down.png';
import pictoUp from '../../assets/picto/arrow_up.png';
import { useState } from 'react';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderContentList = () => {
    if (isOpen && Array.isArray(content)) {
      return (
        <ul className={styles['collapse-content-list']}>
          {content.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div className={styles['collapse']}>
      <div
        className={styles['collapse-header']}
        style={{ marginBottom: isOpen ? '0px' : '30px' }}
      >
        <p>{title}</p>
        <img
          src={isOpen ? pictoUp : pictoDown}
          alt='picto'
          onClick={() => setIsOpen(!isOpen)}
          className={styles['collapse-header-img']}
        />
      </div>
      {isOpen && !Array.isArray(content) && (
        <p
          className={styles['collapse-content']}
          style={{ marginBottom: isOpen ? '30px' : '0px' }}
        >
          {content}
        </p>
      )}
      {renderContentList()}
    </div>
  );
};

export default Collapse;
