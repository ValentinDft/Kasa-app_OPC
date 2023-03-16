import styles from "./home.module.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles["container"]}>
      <h1>Je suis la home-page</h1>
      <NavLink to='/about'>Go a propos</NavLink>
    </div>
  );
};
export default Home;
