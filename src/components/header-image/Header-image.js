import styles from "./header-image.module.scss";

const HeaderImage = ({ image, title, height }) => {
  return (
    <div className={styles["header"]}>
      {title && <span className={styles["header-title"]}>{title}</span>}
      <img src={image} alt='header' style={{ height: height }} />
    </div>
  );
};
export default HeaderImage;
