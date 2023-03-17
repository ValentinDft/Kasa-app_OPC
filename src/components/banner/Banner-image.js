import styles from './banner-image.module.scss';

const BannerImage = ({ image, title, height }) => {
  return (
    <div className={styles['header']}>
      {title && <span className={styles['header-title']}>{title}</span>}
      <img src={image} alt='header' style={{ height: height }} />
    </div>
  );
};
export default BannerImage;
