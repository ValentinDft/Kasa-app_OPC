import styles from './card-location.module.scss';
import { useNavigate } from 'react-router-dom';

const CardLocation = (props) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(${props.cover})`,
      }}
      className={styles['card']}
      onClick={() => navigate(`/accommodation/${props.id}`)}
    >
      <div className={styles['card-title']}>
        <p>{props.title}</p>
      </div>
    </div>
  );
};
export default CardLocation;
