import styles from "./topbar.module.scss";
// import { NavLink } from "react-router-dom";

const Topbar = () => {
  return (
    <div className={styles["container"]}>
      <h1>Je suis la topbar</h1>
      {/* <NavLink to='about'>A propos</NavLink> */}
    </div>
  );
};
export default Topbar;
