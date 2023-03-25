import styles from './banner-image.module.scss';

const BannerImage = ({ image, title, height }) => {
  return (
    <div
      className={styles['header']}
      style={{
        height: height,
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {title && <span className={styles['header-title']}>{title}</span>}
    </div>
  );
};
export default BannerImage;
