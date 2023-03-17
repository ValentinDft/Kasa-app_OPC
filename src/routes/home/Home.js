import styles from "./home.module.scss";
import HeaderImage from "../../components/header-image/Header-image";
import imgHeader from "../../assets/cover.png";

const Home = () => {
  return (
    <div className={styles["container"]}>
      <HeaderImage
        image={imgHeader}
        title='Chez vous, partout et ailleurs'
        height={240}
      />
    </div>
  );
};
export default Home;
