import styles from './rating.module.scss';
import starEmpty from '../../assets/picto/stars-empty.png';
import starFilled from '../../assets/picto/stars-fill.png';

const Rating = ({ stars }) => {
  return (
    <div className={styles['container']}>
      <img src={stars >= 1 ? starFilled : starEmpty} alt='stars' />
      <img src={stars >= 2 ? starFilled : starEmpty} alt='stars' />
      <img src={stars >= 3 ? starFilled : starEmpty} alt='stars' />
      <img src={stars >= 4 ? starFilled : starEmpty} alt='stars' />
      <img src={stars >= 5 ? starFilled : starEmpty} alt='stars' />
    </div>
  );
};

export default Rating;
