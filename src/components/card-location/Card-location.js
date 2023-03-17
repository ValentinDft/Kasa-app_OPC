import styles from "./card-location.module.scss";

const CardLocation = ({ image, title, description }) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-title"]}>
        <p>Titre de la location</p>
      </div>
    </div>
  );
};
export default CardLocation;
