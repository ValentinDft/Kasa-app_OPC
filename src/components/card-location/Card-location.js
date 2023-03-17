import styles from './card-location.module.scss';

const CardLocation = (props) => {
  // console.log('props', props);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(${props.cover})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className={styles['card']}
    >
      <div className={styles['card-title']}>
        <p>{props.title}</p>
      </div>
    </div>
  );
};
export default CardLocation;
